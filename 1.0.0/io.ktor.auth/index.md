---
title: io.ktor.auth - 
layout: api
---



## Package io.ktor.auth

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-auth-scheme/index.html">AuthScheme</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">AuthScheme</span></code></div>

Contains the standard auth schemes.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-authentication/index.html">Authentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Authentication</span></code></div>

Authentication feature supports pluggable mechanisms for checking and challenging a client to provide credentials


</td>
</tr>
<tr>
<td markdown="1">

<a href="-authentication-context/index.html">AuthenticationContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationContext</span></code></div>

Represents an authentication context for the call


</td>
</tr>
<tr>
<td markdown="1">

<a href="-authentication-failed-cause/index.html">AuthenticationFailedCause</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">AuthenticationFailedCause</span></code></div>

Represents a cause for authentication challenge request


</td>
</tr>
<tr>
<td markdown="1">

<a href="-authentication-pipeline/index.html">AuthenticationPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="-authentication-context/index.html"><span class="identifier">AuthenticationContext</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Represents authentication <a href="../io.ktor.util.pipeline/-pipeline/index.html">Pipeline</a> for checking and requesting authentication


</td>
</tr>
<tr>
<td markdown="1">

<a href="-authentication-procedure-challenge/index.html">AuthenticationProcedureChallenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationProcedureChallenge</span></code></div>

Represents authentication challenging procedure requested by authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="-authentication-provider/index.html">AuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">AuthenticationProvider</span></code></div>

Represents an authentication provider with the given name


</td>
</tr>
<tr>
<td markdown="1">

<a href="-authentication-route-selector/index.html">AuthenticationRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.routing/-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

An authentication route node that is used by <a href="-authentication/index.html">Authentication</a> feature
and usually created by <a href="authenticate.html">Route.authenticate</a> DSL function so generally there is no need to instantiate it directly
unless you are writing an extension


</td>
</tr>
<tr>
<td markdown="1">

<a href="-basic-authentication-provider/index.html">BasicAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">BasicAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a Basic authentication provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="-credential.html">Credential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Credential</span></code></div>

Marker interface indicating that a class represents credentials for authentication


</td>
</tr>
<tr>
<td markdown="1">

<a href="-default-o-auth2-state-provider/index.html">DefaultOAuth2StateProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultOAuth2StateProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-o-auth2-state-provider/index.html"><span class="identifier">OAuth2StateProvider</span></a></code></div>

The default state provider that does generate random nonce and don't keep them


</td>
</tr>
<tr>
<td markdown="1">

<a href="-digest-authentication-provider/index.html">DigestAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DigestAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a Digest authentication provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="-digest-credential/index.html">DigestCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">DigestCredential</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-credential.html"><span class="identifier">Credential</span></a></code></div>

Represents Digest credentials


</td>
</tr>
<tr>
<td markdown="1">

<a href="-form-auth-challenge/index.html">FormAuthChallenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">FormAuthChallenge</span></code></div>

Specifies what to send back if form authentication fails.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-form-authentication-provider/index.html">FormAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a form-based authentication provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="-header-value-encoding/index.html">HeaderValueEncoding</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">HeaderValueEncoding</span></code></div>

Describes how a header should be encoded.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-auth-header/index.html">HttpAuthHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">HttpAuthHeader</span></code></div>

Describes an authentication header with a mandatory <a href="-http-auth-header/auth-scheme.html">authScheme</a> that usually is a standard <a href="-auth-scheme/index.html">AuthScheme</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth2-request-parameters/index.html">OAuth2RequestParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">OAuth2RequestParameters</span></code></div>

List of OAuth2 request parameters for both peers


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth2-response-parameters/index.html">OAuth2ResponseParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">OAuth2ResponseParameters</span></code></div>

List of OAuth2 server response parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth2-state-provider/index.html">OAuth2StateProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">OAuth2StateProvider</span></code></div>

Provides states for OAuth2. State could be just a random number (nonce) or could contain additional form fields or
a signature. It is important that it should be a way to verify state. So all states need to be saved somehow or
a state need to be a signed set of parameters that could be verified later


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth-access-token-response/index.html">OAuthAccessTokenResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuthAccessTokenResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-principal.html"><span class="identifier">Principal</span></a></code></div>

OAuth access token acquired from the server


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth-authentication-provider/index.html">OAuthAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OAuthAuthenticationProvider</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents an OAuth provider for <a href="-authentication/index.html">Authentication</a> feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth-callback/index.html">OAuthCallback</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuthCallback</span></code></div>

OAauth callback parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth-grant-types/index.html">OAuthGrantTypes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">OAuthGrantTypes</span></code></div>

OAuth grant types constants


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth-server-settings/index.html">OAuthServerSettings</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuthServerSettings</span></code></div>

Represents OAuth server settings


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth-version/index.html">OAuthVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">OAuthVersion</span></code></div>

OAuth versions used in configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="-principal.html">Principal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Principal</span></code></div>

Marker interface indicating that a class represents an authenticated principal


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-auth-challenge/index.html">SessionAuthChallenge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">SessionAuthChallenge</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Specifies what to send back if form authentication fails.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-authentication-provider/index.html">SessionAuthenticationProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionAuthenticationProvider</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-authentication-provider/index.html"><span class="identifier">AuthenticationProvider</span></a></code></div>

Represents a session-based authentication provider


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unauthorized-response/index.html">UnauthorizedResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnauthorizedResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/-no-content/index.html"><span class="identifier">NoContent</span></a></code></div>

Response content with <code>401 Unauthorized</code> status code and <code>WWW-Authenticate</code> header of supplied <a href="-unauthorized-response/challenges.html">challenges</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-user-hashed-table-auth/index.html">UserHashedTableAuth</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UserHashedTableAuth</span></code></div>

Simple in-memory table that keeps user names and password hashes


</td>
</tr>
<tr>
<td markdown="1">

<a href="-user-id-principal/index.html">UserIdPrincipal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">UserIdPrincipal</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-principal.html"><span class="identifier">Principal</span></a></code></div>

Represents a simple user's principal identified by <a href="-user-id-principal/name.html">name</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-user-password-credential/index.html">UserPasswordCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">UserPasswordCredential</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-credential.html"><span class="identifier">Credential</span></a></code></div>

Represents a simple user <a href="-user-password-credential/name.html">name</a> and <a href="-user-password-credential/password.html">password</a> credential pair


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-o-auth1a-exception/index.html">OAuth1aException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuth1aException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/Exception.html"><span class="identifier">Exception</span></a></code></div>

Represents an OAuth1a server error


</td>
</tr>
<tr>
<td markdown="1">

<a href="-o-auth2-exception/index.html">OAuth2Exception</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OAuth2Exception</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/Exception.html"><span class="identifier">Exception</span></a></code></div>

Represents a error during communicating to OAuth2 server


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-o-auth-key.html">OAuthKey</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">OAuthKey</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

OAuth provider key


</td>
</tr>
<tr>
<td markdown="1">

<a href="-session-auth-challenge-key.html">SessionAuthChallengeKey</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">SessionAuthChallengeKey</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

A key used to register auth challenge


</td>
</tr>
<tr>
<td markdown="1">

<a href="authentication.html">authentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">authentication</span><span class="symbol">: </span><a href="-authentication-context/index.html"><span class="identifier">AuthenticationContext</span></a></code></div>

Retrieves an <a href="-authentication-context/index.html">AuthenticationContext</a> for <code>this</code> call


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="authenticate.html">authenticate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">authenticate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;arrayOf&lt;String?&gt;(null)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/optional">optional</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/build">build</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Creates an authentication route that does handle authentication by the specified providers referred by
<a href="authenticate.html#io.ktor.auth$authenticate(io.ktor.routing.Route, kotlin.Array((kotlin.String)), kotlin.Boolean, kotlin.Function1((io.ktor.routing.Route, kotlin.Unit)))/configurations">configurations</a> names. <code>null</code> could be used to point to the default provider and could be also mixed with other
provider names.
Other routes, handlers and interceptors could be nested into this node


</td>
</tr>
<tr>
<td markdown="1">

<a href="authentication.html">authentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="identifier">authentication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$authentication(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs <a href="-authentication/index.html">Authentication</a> feature if not yet installed and invokes <a href="authentication.html#io.ktor.auth$authentication(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/block">block</a> on it's config.
One is allowed to modify existing authentication configuration only in <a href="authentication.html">authentication</a>'s block or
via <a href="-authentication/configure.html">Authentication.configure</a> function.
Changing captured instance of configuration outside of <a href="authentication.html#io.ktor.auth$authentication(io.ktor.application.Application, kotlin.Function1((io.ktor.auth.Authentication.Configuration, kotlin.Unit)))/block">block</a> may have no effect or damage application's state.


</td>
</tr>
<tr>
<td markdown="1">

<a href="basic.html">basic</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">basic</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basic(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.BasicAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basic(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.BasicAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-basic-authentication-provider/index.html"><span class="identifier">BasicAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs Basic Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="basic-authentication.html">basicAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">basicAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basicAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basicAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="basic-authentication-credentials.html">basicAuthenticationCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">basicAuthenticationCredentials</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basicAuthenticationCredentials(io.ktor.request.ApplicationRequest, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">?</span></code></div>

Retrieves Basic authentication credentials for this <a href="../io.ktor.request/-application-request/index.html">ApplicationRequest</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="create-obtain-request-token-header.html">createObtainRequestTokenHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">createObtainRequestTokenHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createObtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/callback">callback</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createObtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/consumerKey">consumerKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createObtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/nonce">nonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createObtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/timestamp">timestamp</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span>&nbsp;<span class="symbol">=</span>&nbsp;LocalDateTime.now()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Create an HTTP auth header for OAuth1a obtain token request


</td>
</tr>
<tr>
<td markdown="1">

<a href="create-upgrade-request-token-header.html">createUpgradeRequestTokenHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">createUpgradeRequestTokenHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/consumerKey">consumerKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/token">token</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/nonce">nonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$createUpgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/timestamp">timestamp</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span>&nbsp;<span class="symbol">=</span>&nbsp;LocalDateTime.now()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Create an HTTP auth header for OAuth1a upgrade token request


</td>
</tr>
<tr>
<td markdown="1">

<a href="digest.html">digest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">digest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digest(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.DigestAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digest(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.DigestAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-digest-authentication-provider/index.html"><span class="identifier">DigestAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs Digest Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="digest-authentication.html">digestAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">digestAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"ktor"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digestAlgorithm">digestAlgorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"MD5"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digesterProvider">digesterProvider</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ MessageDigest.getInstance(it) }<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$digestAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, kotlin.Function1((kotlin.String, java.security.MessageDigest)), kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/userNameRealmPasswordDigestProvider">userNameRealmPasswordDigestProvider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="digest-authentication-credentials.html">digestAuthenticationCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">digestAuthenticationCredentials</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-digest-credential/index.html"><span class="identifier">DigestCredential</span></a><span class="symbol">?</span></code></div>

Retrieves <a href="-digest-credential/index.html">DigestCredential</a> from this call


</td>
</tr>
<tr>
<td markdown="1">

<a href="expected-digest.html">expectedDigest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-digest-credential/index.html"><span class="identifier">DigestCredential</span></a><span class="symbol">.</span><span class="identifier">expectedDigest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/digester">digester</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/userNameRealmPasswordDigest">userNameRealmPasswordDigest</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Calculates expected digest bytes for this <a href="-digest-credential/index.html">DigestCredential</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="form.html">form</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">form</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$form(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.FormAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$form(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.FormAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-form-authentication-provider/index.html"><span class="identifier">FormAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs Form Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="form-authentication.html">formAuthentication</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">formAuthentication</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/userParamName">userParamName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"user"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/passwordParamName">passwordParamName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"password"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/challenge">challenge</span><span class="symbol">:</span>&nbsp;<a href="-form-auth-challenge/index.html"><span class="identifier">FormAuthChallenge</span></a>&nbsp;<span class="symbol">=</span>&nbsp;FormAuthChallenge.Unauthorized<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$formAuthentication(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.String, io.ktor.auth.FormAuthChallenge, kotlin.SuspendFunction1((io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="oauth.html">oauth</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><s><span class="identifier">oauth</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/client">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/dispatcher">dispatcher</span><span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/providerLookup">providerLookup</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/urlProvider">urlProvider</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">oauth</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/client">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/dispatcher">dispatcher</span><span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/providerLookup">providerLookup</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, kotlin.Function1((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings)), kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.auth.OAuthServerSettings, kotlin.String)))/urlProvider">urlProvider</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Install both OAuth1a and OAuth2 authentication helpers that do redirect to OAuth server authorization page
and handle corresponding callbacks

<div class="signature"><code><span class="keyword">fun </span><a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">oauth</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.OAuthAuthenticationProvider, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauth(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.OAuthAuthenticationProvider, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-o-auth-authentication-provider/index.html"><span class="identifier">OAuthAuthenticationProvider</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Installs OAuth Authentication mechanism


</td>
</tr>
<tr>
<td markdown="1">

<a href="oauth-handle-callback.html">oauthHandleCallback</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">oauthHandleCallback</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthHandleCallback(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.auth.OAuthAccessTokenResponse, kotlin.Unit)))/client">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthHandleCallback(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.auth.OAuthAccessTokenResponse, kotlin.Unit)))/dispatcher">dispatcher</span><span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthHandleCallback(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.auth.OAuthAccessTokenResponse, kotlin.Unit)))/provider">provider</span><span class="symbol">:</span>&nbsp;<a href="-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthHandleCallback(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.auth.OAuthAccessTokenResponse, kotlin.Unit)))/callbackUrl">callbackUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthHandleCallback(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.auth.OAuthAccessTokenResponse, kotlin.Unit)))/loginPageUrl">loginPageUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthHandleCallback(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.auth.OAuthAccessTokenResponse, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthHandleCallback(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String, kotlin.String, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)), kotlin.SuspendFunction1((io.ktor.auth.OAuthAccessTokenResponse, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="-o-auth-access-token-response/index.html"><span class="identifier">OAuthAccessTokenResponse</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Handle OAuth callback


</td>
</tr>
<tr>
<td markdown="1">

<a href="oauth-respond-redirect.html">oauthRespondRedirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">oauthRespondRedirect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthRespondRedirect(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String)/client">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthRespondRedirect(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String)/dispatcher">dispatcher</span><span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthRespondRedirect(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String)/provider">provider</span><span class="symbol">:</span>&nbsp;<a href="-o-auth-server-settings/index.html"><span class="identifier">OAuthServerSettings</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$oauthRespondRedirect(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.client.HttpClient, kotlinx.coroutines.CoroutineDispatcher, io.ktor.auth.OAuthServerSettings, kotlin.String)/callbackUrl">callbackUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond OAuth redirect


</td>
</tr>
<tr>
<td markdown="1">

<a href="obtain-request-token-header.html">obtainRequestTokenHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">obtainRequestTokenHeader</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$obtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/callback">callback</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$obtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/consumerKey">consumerKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$obtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/nonce">nonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$obtainRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/timestamp">timestamp</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span>&nbsp;<span class="symbol">=</span>&nbsp;LocalDateTime.now()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-authorization-header.html">parseAuthorizationHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">parseAuthorizationHeader</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">?</span></code></div>

Parses an authorization header from a <a href="../io.ktor.request/-application-request/index.html">ApplicationRequest</a> returning a <a href="-http-auth-header/index.html">HttpAuthHeader</a>.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseAuthorizationHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$parseAuthorizationHeader(kotlin.String)/headerValue">headerValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">?</span></code></div>

Parses an authorization header <a href="parse-authorization-header.html#io.ktor.auth$parseAuthorizationHeader(kotlin.String)/headerValue">headerValue</a> into a <a href="-http-auth-header/index.html">HttpAuthHeader</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="principal.html">principal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">P</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-principal.html"><span class="identifier">Principal</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">principal</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="principal.html#P"><span class="identifier">P</span></a><span class="symbol">?</span></code></div>

Retrieves authenticated <a href="-principal.html">Principal</a> for <code>this</code> call


</td>
</tr>
<tr>
<td markdown="1">

<a href="session.html">session</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-principal.html"><span class="identifier">Principal</span></a><span class="symbol">&gt;</span> <a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">session</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, io.ktor.auth.SessionAuthChallenge((io.ktor.auth.session.T)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, io.ktor.auth.SessionAuthChallenge((io.ktor.auth.session.T)))/challenge">challenge</span><span class="symbol">:</span>&nbsp;<a href="-session-auth-challenge/index.html"><span class="identifier">SessionAuthChallenge</span></a><span class="symbol">&lt;</span><a href="session.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;SessionAuthChallenge.Default<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Provides ability to authenticate users via sessions. It only works if <a href="session.html#T">T</a> session type denotes <a href="-principal.html">Principal</a> as well
otherwise use full <a href="session.html">session</a> with lambda function with <a href="-session-authentication-provider/-configuration/validate.html">SessionAuthenticationProvider.Configuration.validate</a> configuration

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-authentication/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">session</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.SessionAuthenticationProvider.Configuration((io.ktor.auth.session.T)), kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$session(io.ktor.auth.Authentication.Configuration, kotlin.String, kotlin.Function1((io.ktor.auth.SessionAuthenticationProvider.Configuration((io.ktor.auth.session.T)), kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-session-authentication-provider/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&lt;</span><a href="session.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Provides ability to authenticate users via sessions. It is important to have
specified <a href="-session-authentication-provider/-configuration/validate.html">SessionAuthenticationProvider.Configuration.validate</a> and
<a href="-session-authentication-provider/-configuration/challenge.html">SessionAuthenticationProvider.Configuration.challenge</a> in the lambda
to get it work property


</td>
</tr>
<tr>
<td markdown="1">

<a href="sign.html">sign</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a><span class="symbol">.</span><span class="identifier">sign</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/baseUrl">baseUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$sign(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.Pair((kotlin.String, )))))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Sign an HTTP auth header


</td>
</tr>
<tr>
<td markdown="1">

<a href="signature-base-string.html">signatureBaseString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">signatureBaseString</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/header">header</span><span class="symbol">:</span>&nbsp;<a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/baseUrl">baseUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Build an OAuth1a signature base string as per RFC


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-digest-credential.html">toDigestCredential</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a><span class="symbol">.</span><span class="identifier">toDigestCredential</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-digest-credential/index.html"><span class="identifier">DigestCredential</span></a></code></div>

Converts <a href="-http-auth-header/index.html">HttpAuthHeader</a> to <a href="-digest-credential/index.html">DigestCredential</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="upgrade-request-token-header.html">upgradeRequestTokenHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">upgradeRequestTokenHeader</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$upgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/consumerKey">consumerKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$upgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/token">token</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$upgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/nonce">nonce</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$upgradeRequestTokenHeader(kotlin.String, kotlin.String, kotlin.String, java.time.LocalDateTime)/timestamp">timestamp</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span>&nbsp;<span class="symbol">=</span>&nbsp;LocalDateTime.now()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Create an HTTP auth header for OAuth1a upgrade token request


</td>
</tr>
<tr>
<td markdown="1">

<a href="verifier.html">verifier</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-digest-credential/index.html"><span class="identifier">DigestCredential</span></a><span class="symbol">.</span><span class="identifier">verifier</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digester">digester</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/userNameRealmPasswordDigest">userNameRealmPasswordDigest</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Verifies credentials are valid for given <a href="verifier.html#io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/method">method</a> and <a href="verifier.html#io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/digester">digester</a> and <a href="verifier.html#io.ktor.auth$verifier(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.SuspendFunction2((kotlin.String, , kotlin.ByteArray)))/userNameRealmPasswordDigest">userNameRealmPasswordDigest</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="verify-with-o-auth2.html">verifyWithOAuth2</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">verifyWithOAuth2</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifyWithOAuth2(io.ktor.auth.UserPasswordCredential, io.ktor.client.HttpClient, io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings)/credential">credential</span><span class="symbol">:</span>&nbsp;<a href="-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifyWithOAuth2(io.ktor.auth.UserPasswordCredential, io.ktor.client.HttpClient, io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings)/client">client</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$verifyWithOAuth2(io.ktor.auth.UserPasswordCredential, io.ktor.client.HttpClient, io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings)/settings">settings</span><span class="symbol">:</span>&nbsp;<a href="-o-auth-server-settings/-o-auth2-server-settings/index.html"><span class="identifier">OAuth2ServerSettings</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-o-auth-access-token-response/-o-auth2/index.html"><span class="identifier">OAuth2</span></a></code></div>

Implements Resource Owner Password Credentials Grant
see http://tools.ietf.org/html/rfc6749#section-4.3


</td>
</tr>
</tbody>
</table>
