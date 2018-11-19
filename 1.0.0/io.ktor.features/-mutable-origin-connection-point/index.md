---
title: MutableOriginConnectionPoint - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">MutableOriginConnectionPoint</a></div>

# MutableOriginConnectionPoint

<div class="signature"><code><span class="keyword">class </span><span class="identifier">MutableOriginConnectionPoint</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-request-connection-point/index.html"><span class="identifier">RequestConnectionPoint</span></a></code></div>

Represents a <a href="../../io.ktor.http/-request-connection-point/index.html">RequestConnectionPoint</a>. Every it's component is mutable so application features could provide them

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">MutableOriginConnectionPoint</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.MutableOriginConnectionPoint$<init>(io.ktor.http.RequestConnectionPoint)/delegate">delegate</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-request-connection-point/index.html"><span class="identifier">RequestConnectionPoint</span></a><span class="symbol">)</span></code></div>

Represents a <a href="../../io.ktor.http/-request-connection-point/index.html">RequestConnectionPoint</a>. Every it's component is mutable so application features could provide them


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request host, useful for virtual hosts routing


</td>
</tr>
<tr>
<td markdown="1">

<a href="method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">method</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

Request HTTP method


</td>
</tr>
<tr>
<td markdown="1">

<a href="port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Request port, for example 80 or 443


</td>
</tr>
<tr>
<td markdown="1">

<a href="remote-host.html">remoteHost</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">remoteHost</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Client address or host name (generally not resolved to name for performance reasons).
For <a href="#">io.ktor.application.ApplicationRequest.local</a> instance could point to
a proxy our application running behind.
NEVER use it for user authentication as it can be easily falsified (user can simply set some HTTP headers
such as X-Forwarded-Host so you should NEVER rely on it in any security checks.
If you are going to use it to create a back-connection please do it with care as an offender can easily
use it to force you to connect to some host that is not intended to be connected to so that may cause
serious consequences.


</td>
</tr>
<tr>
<td markdown="1">

<a href="scheme.html">scheme</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">scheme</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request scheme, for example "http" or "https"


</td>
</tr>
<tr>
<td markdown="1">

<a href="uri.html">uri</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">uri</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

URI path with no host, port and no schema specification, but possibly with query


</td>
</tr>
<tr>
<td markdown="1">

<a href="version.html">version</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">version</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Protocol version string


</td>
</tr>
</tbody>
</table>
