---
title: io.ktor.server.servlet - 
layout: api
---



## Package io.ktor.server.servlet

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-async-servlet-application-call/index.html">AsyncServletApplicationCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">AsyncServletApplicationCall</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-call/index.html"><span class="identifier">BaseApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-async-servlet-application-request/index.html">AsyncServletApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AsyncServletApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-servlet-application-request/index.html"><span class="identifier">ServletApplicationRequest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-async-servlet-application-response/index.html">AsyncServletApplicationResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">AsyncServletApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-servlet-application-response/index.html"><span class="identifier">ServletApplicationResponse</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-default-servlet-upgrade/index.html">DefaultServletUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultServletUpgrade</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-servlet-upgrade/index.html"><span class="identifier">ServletUpgrade</span></a></code></div>

The default servlet upgrade implementation using Servlet API.
Please note that some servlet containers may not support it or it may be broken.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-ktor-servlet/index.html">KtorServlet</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">KtorServlet</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">HttpServlet</span><span class="symbol">, </span><span class="identifier">CoroutineScope</span></code></div>

A base class for servlet engine implementations


</td>
</tr>
<tr>
<td markdown="1">

<a href="-servlet-application-engine/index.html">ServletApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ServletApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-ktor-servlet/index.html"><span class="identifier">KtorServlet</span></a></code></div>

This servlet need to be installed into a servlet container


</td>
</tr>
<tr>
<td markdown="1">

<a href="-servlet-application-request/index.html">ServletApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ServletApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-request/index.html"><span class="identifier">BaseApplicationRequest</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-servlet-application-request-cookies/index.html">ServletApplicationRequestCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ServletApplicationRequestCookies</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.request/-request-cookies/index.html"><span class="identifier">RequestCookies</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-servlet-application-request-headers/index.html">ServletApplicationRequestHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ServletApplicationRequestHeaders</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-servlet-application-response/index.html">ServletApplicationResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ServletApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-response/index.html"><span class="identifier">BaseApplicationResponse</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-servlet-upgrade/index.html">ServletUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ServletUpgrade</span></code></div>

Servlet upgrade processing


</td>
</tr>
<tr>
<td markdown="1">

<a href="-servlet-upgrade-handler/index.html">ServletUpgradeHandler</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ServletUpgradeHandler</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">HttpUpgradeHandler</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-upgrade-request/index.html">UpgradeRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UpgradeRequest</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="java-security-principal.html">javaSecurityPrincipal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">javaSecurityPrincipal</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/security/Principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span></code></div>

Returns Java's JAAS Principal


</td>
</tr>
</tbody>
</table>
