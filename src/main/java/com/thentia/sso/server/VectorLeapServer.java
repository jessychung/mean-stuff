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

package com.thentia.sso.server;

import com.thentia.vectorleap.common.config.VectorLeapConfiguration;
import com.thentia.vectorleap.common.healthcheck.VectorLeapHealthCheck;
import com.thentia.vectorleap.common.security.VectorLeapAuthFilter;
import com.thentia.vectorleap.common.security.VectorLeapAuthenticator;
import com.thentia.vectorleap.common.security.VectorLeapUser;
import com.thentia.vectorleap.common.service.MongoDbService;
import com.thentia.sso.api.v1.AuthenticationResource;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.forms.MultiPartBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.joda.time.DateTimeZone;

public class VectorLeapServer extends Application<VectorLeapConfiguration>
{
	@Override
	public void initialize(Bootstrap<VectorLeapConfiguration> bootstrap)
	{
		super.initialize( bootstrap );
		DateTimeZone.setDefault( DateTimeZone.UTC );
		bootstrap.addBundle( new MultiPartBundle() );
		bootstrap.addBundle( new AssetsBundle("/web","/","index.html","static"));
	}

	@Override
	public void run(String... arguments) throws Exception
	{
		super.run( arguments );
	}

	@Override
	public void run(VectorLeapConfiguration vectorLeapConfiguration, Environment environment) throws Exception
	{
		environment.healthChecks().register
				(
						"vectorleap",
						new VectorLeapHealthCheck()
				);

		VectorLeapConfiguration.set( vectorLeapConfiguration );

		environment.lifecycle().manage
				( new MongoDbService() );

		environment.jersey().register
				( new AuthenticationResource() );

		environment.jersey().setUrlPattern("/rest/*");

		environment.jersey().register( new AuthDynamicFeature(
				new VectorLeapAuthFilter.Builder<VectorLeapUser>()
						.setRealm( "vectorleap" )
						.setPrefix( "Bearer" )
						.setAuthenticator( new VectorLeapAuthenticator() )
						.buildAuthFilter() ) );

		environment.jersey().register
				( new AuthValueFactoryProvider.Binder( VectorLeapUser.class ) );
	}

	public static void main(String[] args) throws Exception
	{
		VectorLeapServer p = new VectorLeapServer();
		p.run( args );
	}
}
