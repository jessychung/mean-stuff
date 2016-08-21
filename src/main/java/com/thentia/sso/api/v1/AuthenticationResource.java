/*
 * Copyright (c) 2016, Thentia Corporation
 * All Rights Reserved.
 *
 * Thentia Corporation
 * 218-543 Richmond Street West
 * Toronto, Ontario, Canada M5V 1Y6
 * http://www.thentia.com
 * inquiries@thentia.com
 */

package com.thentia.sso.api.v1;


import com.thentia.vectorleap.common.data.Json;
import com.thentia.vectorleap.common.data.Mongo;
import com.thentia.vectorleap.common.data.Response;
import com.thentia.vectorleap.common.data.Validate;
import com.thentia.vectorleap.common.network.Network;
import com.thentia.vectorleap.common.security.Crypto;
import com.thentia.vectorleap.common.security.VectorLeapSession;
import com.thentia.vectorleap.common.security.VectorLeapUser;
import com.thentia.vectorleap.common.service.MongoDbService;
import com.thentia.vectorleap.common.utility.VectorLeapError;
import org.bson.types.ObjectId;
import org.codehaus.plexus.util.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Path ("/1.0/auth")
@Produces (MediaType.APPLICATION_JSON)
public class AuthenticationResource
{
	final static Logger logger = LoggerFactory.getLogger( AuthenticationResource.class );

	@POST
	@Path ("/enroll")
	public Response enroll(@Context javax.servlet.http.HttpServletRequest request)
	{
		Mongo m = new Mongo();
		Json j = new Json();
		Crypto c = new Crypto();
		Network n = new Network();

		try
		{
			Optional<Map<String, Object>> post = n.readJsonData( request );

			if (post.isPresent())
			{
				if (!post.get().containsKey( "vl_email1" ) || !post.get().containsKey( "vl_password" ))
				{
					return Response.generalFailure( "Invalid schema", "POST" );
				}
			}

			else
			{
				return Response.generalFailure( "No data provided", "POST" );
			}

			Optional<Map<String, Object>> doc = m.getDocumentByKeyValue(
					MongoDbService.client().getDatabase( "vl_sso" ), "vl_user", "vl_email1",
					post.get().get( "vl_email1" ).toString()

			);

			if (doc.isPresent())
			{
				return
						new Response()
								.method( "POST" )
								.spaceName( "vl_user" )
								.errorCode( VectorLeapError.ERR_OBJECT_EXISTS )
								.errorMessage( VectorLeapError.MSG_OBJECT_EXISTS )
								.resultCount( Integer.toString( 0 ) );
			}

			else
			{
				Validate v = new Validate()
						.put("vl_email1", Validate.PATTERN_EMAIL)
						.put("vl_password", Validate.PATTERN_PASSWORD);

				Map<String, Boolean> result = v.validate( post.get() );

				if (v.valid( result ) && post.isPresent())
				{
					Optional<Object> user = j.mapToObject( post.get(), VectorLeapUser.class );

					if (user.isPresent())
					{
						VectorLeapUser vlu = (VectorLeapUser) user.get();
						vlu
								.password( c.hash( vlu.password() ) )
								.id( new ObjectId().toString() );

						m.upsertDocument(
								MongoDbService.client().getDatabase( "vl_sso" ),
								"vl_user",
								vlu.id(),
								j.objectToMap( vlu )
										);

						return
								new Response()
										.method( "POST" )
										.spaceName( "vl_user" )
										.errorCode( VectorLeapError.SUCCESS )
										.errorMessage( VectorLeapError.MSG_NONE )
										.resultCount( Integer.toString( 1 ) )
										.result( new Json().objectToList( vlu ) );
					}
				}

				else
				{
					return Response.validationFailure( "POST", result );
				}
			}
		}

		catch (org.apache.shiro.crypto.CryptoException e)
		{
			logger.error( "JCE security policy not permissive." );
		}

		catch (Exception e)
		{
			logger.error( ExceptionUtils.getFullStackTrace( e ) );
		}

		return Response.generalFailure( "", "POST" );
	}

	@POST
	@Path ("/claim")
	public Response issueClaim(@Context javax.servlet.http.HttpServletRequest request)
	{
		Mongo m = new Mongo();
		Json j = new Json();
		Crypto c = new Crypto();
		Network n = new Network();

		try
		{
			Optional<Map<String, Object>> post = n.readJsonData( request );

			if (post.isPresent())
			{
				if (!post.get().containsKey( "vl_email1" ) || !post.get().containsKey( "vl_password" ))
				{
					return Response.generalFailure( "Invalid schema", "POST" );
				}

				Optional<Map<String, Object>> doc = m.getDocumentByKeyValue(
						MongoDbService.client().getDatabase( "vl_sso" ), "vl_user", "vl_email1",
						post.get().get( "vl_email1" ).toString()
																		   );

				if (doc.isPresent())
				{
					doc.get().remove( "_id" );
					Optional<Object> user = j.mapToObject( doc.get(), VectorLeapUser.class );

					if (user.isPresent())
					{
						VectorLeapUser vlu = (VectorLeapUser) user.get();

						System.out.println( "COMPARE" );
						System.out.println( vlu.password() );
						System.out.println( c.hash( post.get().get( "vl_password" ).toString() ) );

						if (vlu.password().equalsIgnoreCase( c.hash( post.get().get( "vl_password" ).toString() ) ))
						{
							VectorLeapSession session = new VectorLeapSession();
							session.id( vlu.id() );

							HashMap<String, Object> result = new HashMap<String, Object>();
							result.put( "session", session.token().get() );

							return
									new Response()
											.method( Response.POST )
											.spaceName( "vl_user" )
											.errorCode( VectorLeapError.SUCCESS )
											.errorMessage( VectorLeapError.MSG_NONE )
											.resultCount( Integer.toString( result.size() ) )
											.result( j.objectToList( result ) );
						}
					}
				}
			}
		}

		catch (org.apache.shiro.crypto.CryptoException e)
		{
			logger.error( "JCE security policy not permissive." );
		}

		catch (Exception e)
		{
		}

		return Response.generalFailure();
	}
}
