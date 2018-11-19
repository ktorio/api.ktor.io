---
title: CORS.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CORS</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

CORS feature configuration

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

CORS feature configuration


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="allow-credentials.html">allowCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">allowCredentials</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Allow sending credentials


</td>
</tr>
<tr>
<td markdown="1">

<a href="allow-same-origin.html">allowSameOrigin</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">allowSameOrigin</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Allow requests from the same origin


</td>
</tr>
<tr>
<td markdown="1">

<a href="exposed-headers.html">exposedHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">exposedHeaders</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/TreeSet.html"><span class="identifier">TreeSet</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Exposed HTTP headers that could be accessed by a client


</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/TreeSet.html"><span class="identifier">TreeSet</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Allowed CORS headers


</td>
</tr>
<tr>
<td markdown="1">

<a href="hosts.html">hosts</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">hosts</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/HashSet.html"><span class="identifier">HashSet</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Allowed CORS hosts


</td>
</tr>
<tr>
<td markdown="1">

<a href="max-age.html">maxAge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">maxAge</span><span class="symbol">: </span><span class="identifier">Duration</span></code></div>

Max-Age for cached CORS options


</td>
</tr>
<tr>
<td markdown="1">

<a href="methods.html">methods</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">methods</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/HashSet.html"><span class="identifier">HashSet</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">&gt;</span></code></div>

Allowed HTTP methods


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="any-host.html">anyHost</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">anyHost</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Allow requests from any host


</td>
</tr>
<tr>
<td markdown="1">

<a href="expose-header.html">exposeHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">exposeHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CORS.Configuration$exposeHeader(kotlin.String)/header">header</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Allow to expose <a href="expose-header.html#io.ktor.features.CORS.Configuration$exposeHeader(kotlin.String)/header">header</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="expose-x-http-method-override.html">exposeXHttpMethodOverride</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">exposeXHttpMethodOverride</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Allow to expose <code>X-Http-Method-Override</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">header</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CORS.Configuration$header(kotlin.String)/header">header</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Allow sending <a href="header.html#io.ktor.features.CORS.Configuration$header(kotlin.String)/header">header</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">host</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CORS.Configuration$host(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.collections.List((kotlin.String)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CORS.Configuration$host(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.collections.List((kotlin.String)))/schemes">schemes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;listOf("http")<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CORS.Configuration$host(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.collections.List((kotlin.String)))/subDomains">subDomains</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Allow requests from the specified domains and schemes


</td>
</tr>
<tr>
<td markdown="1">

<a href="method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">method</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CORS.Configuration$method(io.ktor.http.HttpMethod)/method">method</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Please note that CORS operates ONLY with REAL HTTP methods
and will never consider overridden methods via <code>X-Http-Method-Override</code>.
However you can add them here if you are implementing CORS at client side from the scratch
that you generally don't need to do.


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-cors-default-headers.html">CorsDefaultHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">CorsDefaultHeaders</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html"><span class="identifier">Set</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Default HTTP headers that are always allowed by CORS


</td>
</tr>
<tr>
<td markdown="1">

<a href="-cors-default-methods.html">CorsDefaultMethods</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">CorsDefaultMethods</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html"><span class="identifier">Set</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">&gt;</span></code></div>

Default HTTP methods that are always allowed by CORS


</td>
</tr>
</tbody>
</table>
