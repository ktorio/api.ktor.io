---
title: parseAuthorizationHeader - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./parse-authorization-header.html">parseAuthorizationHeader</a></div>

# parseAuthorizationHeader

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">parseAuthorizationHeader</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">?</span></code></div>

Parses an authorization header from a <a href="../io.ktor.request/-application-request/index.html">ApplicationRequest</a> returning a <a href="-http-auth-header/index.html">HttpAuthHeader</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseAuthorizationHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$parseAuthorizationHeader(kotlin.String)/headerValue">headerValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">?</span></code></div>

Parses an authorization header <a href="parse-authorization-header.html#io.ktor.auth$parseAuthorizationHeader(kotlin.String)/headerValue">headerValue</a> into a <a href="-http-auth-header/index.html">HttpAuthHeader</a>.

</div>
