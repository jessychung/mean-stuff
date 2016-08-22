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

package com.thentia.sso.configuration;

import com.thentia.vectorleap.common.metadata.Attribute;
import com.thentia.vectorleap.common.metadata.AttributeType;
import com.thentia.vectorleap.common.metadata.Format;
import com.thentia.vectorleap.common.metadata.Space;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SSOConfigurator
{
	public List<Space> create()
	{
		ArrayList<Space> spaces = new ArrayList<Space>();

		Space s = new Space().getTemplate
				(
						"User",
						"Users",
						"vl_user",
						"fa fa-user"
				);

		s.attributes()
				.addAll
						(
								Arrays.asList
										(
												new Attribute()
														.format( Format.None )
														.analyzed( false )
														.label( "Last Name" )
														.name( "vl_last_name" )
														.type( AttributeType.String ),

												new Attribute()
														.format( Format.None )
														.analyzed( false )
														.label( "First Name" )
														.name( "vl_first_name" )
														.type( AttributeType.String ),

												new Attribute()
														.format( Format.EmailAddress )
														.analyzed( false )
														.label( "E-mail Address" )
														.name( "vl_email_address_1" )
														.type( AttributeType.String ),

												new Attribute()
														.format( Format.Telephone )
														.analyzed( false )
														.label( "Telephone (Primary)" )
														.name( "vl_telephone_1" )
														.type( AttributeType.String ),

												new Attribute()
														.format( Format.Telephone )
														.analyzed( false )
														.label( "Telephone (Mobile)" )
														.name( "vl_telephone_2" )
														.type( AttributeType.String ),

												new Attribute()
														.format( Format.Password )
														.analyzed( false )
														.label( "Password" )
														.name( "vl_password" )
														.type( AttributeType.String )

										)
						);

		spaces.add( s );

		return spaces;
	}
}
