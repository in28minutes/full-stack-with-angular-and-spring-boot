## Course Updates

Really excited to announce that the entire course is now upgraded to Spring Boot 3

### Complete list of Changes

Here's the complete list of changes for Spring Boot 3 Upgrade - https://github.com/in28minutes/full-stack-with-angular-and-spring-boot/commit/330352423d1f41946c15fe07acf589331b02b7db

### Basic Authentication


1) WebSecurityConfigurerAdapter is deprecated
2) antMatchers is now deprecated. Please use requestMatchers instead.


Please find the complete class below

```
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SpringSecurityConfigurationBasicAuth {

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(auth -> auth.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll());

		http.csrf().disable();

		http.httpBasic(withDefaults());

		return http.build();
	}

}
```


### JWT

Dependency Changes

```xml
<!--
<dependency>
		<groupId>io.jsonwebtoken</groupId>
		<artifactId>jjwt</artifactId>
		<version>0.9.1</version>
</dependency> -->

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-configuration-processor</artifactId>
</dependency>
```