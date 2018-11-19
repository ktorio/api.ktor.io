---
title: OAuthServerSettings.OAuth2ServerSettings - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">OAuthServerSettings</a> / <a href="./index.html">OAuth2ServerSettings</a></div>

# OAuth2ServerSettings

<div class="signature"><code><span class="keyword">class </span><span class="identifier">OAuth2ServerSettings</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OAuthServerSettings</span></a></code></div>

OAuth2 server settings

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">OAuth2ServerSettings</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/authorizeUrl">authorizeUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/accessTokenUrl">accessTokenUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/requestMethod">requestMethod</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpMethod.Get<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/clientId">clientId</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/clientSecret">clientSecret</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/defaultScopes">defaultScopes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/accessTokenRequiresBasicAuth">accessTokenRequiresBasicAuth</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/stateProvider">stateProvider</span><span class="symbol">:</span>&nbsp;<a href="../../-o-auth2-state-provider/index.html"><span class="identifier">OAuth2StateProvider</span></a>&nbsp;<span class="symbol">=</span>&nbsp;DefaultOAuth2StateProvider<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.OAuthServerSettings.OAuth2ServerSettings$<init>(kotlin.String, kotlin.String, kotlin.String, io.ktor.http.HttpMethod, kotlin.String, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean, io.ktor.auth.OAuth2StateProvider, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/authorizeUrlInterceptor">authorizeUrlInterceptor</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">)</span></code></div>

OAuth2 server settings


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="access-token-requires-basic-auth.html">accessTokenRequiresBasicAuth</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">accessTokenRequiresBasicAuth</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

to send BASIC auth header when an access token is requested


</td>
</tr>
<tr>
<td markdown="1">

<a href="access-token-url.html">accessTokenUrl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">accessTokenUrl</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

OAuth server access token request URL


</td>
</tr>
<tr>
<td markdown="1">

<a href="authorize-url.html">authorizeUrl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">authorizeUrl</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

OAuth server authorization page URL


</td>
</tr>
<tr>
<td markdown="1">

<a href="authorize-url-interceptor.html">authorizeUrlInterceptor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">authorizeUrlInterceptor</span><span class="symbol">: </span><a href="../../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

an interceptor function to customize authorization URL


</td>
</tr>
<tr>
<td markdown="1">

<a href="client-id.html">clientId</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">clientId</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

client id parameter (provided by OAuth server vendor)


</td>
</tr>
<tr>
<td markdown="1">

<a href="client-secret.html">clientSecret</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">clientSecret</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

client secret parameter (provided by OAuth server vendor)


</td>
</tr>
<tr>
<td markdown="1">

<a href="default-scopes.html">defaultScopes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">defaultScopes</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

OAuth scopes used by default


</td>
</tr>
<tr>
<td markdown="1">

<a href="request-method.html">requestMethod</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">requestMethod</span><span class="symbol">: </span><a href="../../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

HTTP request method to be used to acquire access token (see vendors documentation)


</td>
</tr>
<tr>
<td markdown="1">

<a href="state-provider.html">stateProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">stateProvider</span><span class="symbol">: </span><a href="../../-o-auth2-state-provider/index.html"><span class="identifier">OAuth2StateProvider</span></a></code></div>

to be used to keep nonce values


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

configuration name


</td>
</tr>
<tr>
<td markdown="1">

<a href="../version.html">version</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">version</span><span class="symbol">: </span><a href="../../-o-auth-version/index.html"><span class="identifier">OAuthVersion</span></a></code></div>

OAuth version (1a or 2)


</td>
</tr>
</tbody>
</table>
