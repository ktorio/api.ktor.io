---
title: URLBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">URLBuilder</a></div>

# URLBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">URLBuilder</span></code></div>

A URL builder with all mutable components

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">URLBuilder</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="../-u-r-l-protocol/index.html"><span class="identifier">URLProtocol</span></a>&nbsp;<span class="symbol">=</span>&nbsp;URLProtocol.HTTP<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"localhost"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;DEFAULT_PORT<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/user">user</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/password">password</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/encodedPath">encodedPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"/"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../-parameters-builder/index.html"><span class="identifier">ParametersBuilder</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ParametersBuilder()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/fragment">fragment</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;""<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.URLBuilder$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, kotlin.String, kotlin.String, io.ktor.http.ParametersBuilder, kotlin.String, kotlin.Boolean)/trailingQuery">trailingQuery</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">)</span></code></div>

A URL builder with all mutable components


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="encoded-path.html">encodedPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">encodedPath</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

encoded URL path without query


</td>
</tr>
<tr>
<td markdown="1">

<a href="fragment.html">fragment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">fragment</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

URL fragment (anchor name)


</td>
</tr>
<tr>
<td markdown="1">

<a href="host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

name without port (domain)


</td>
</tr>
<tr>
<td markdown="1">

<a href="parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="../-parameters-builder/index.html"><span class="identifier">ParametersBuilder</span></a></code></div>

URL query parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="password.html">password</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">password</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

password part (optional)


</td>
</tr>
<tr>
<td markdown="1">

<a href="port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

port number


</td>
</tr>
<tr>
<td markdown="1">

<a href="protocol.html">protocol</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">protocol</span><span class="symbol">: </span><a href="../-u-r-l-protocol/index.html"><span class="identifier">URLProtocol</span></a></code></div>

URL protocol (scheme)


</td>
</tr>
<tr>
<td markdown="1">

<a href="trailing-query.html">trailingQuery</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">trailingQuery</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

keep a trailing question character even if there are no query parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="user.html">user</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">user</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

username part (optional)


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-url/index.html"><span class="identifier">Url</span></a></code></div>

Build a <a href="../-url/index.html">Url</a> instance (everything is copied to a new instance)


</td>
</tr>
<tr>
<td markdown="1">

<a href="build-string.html">buildString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">buildString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Build a URL string


</td>
</tr>
<tr>
<td markdown="1">

<a href="path.html">path</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">path</span><span class="symbol">(</span><span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http.URLBuilder$path(kotlin.Array((kotlin.String)))/components">components</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLBuilder</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">path</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.URLBuilder$path(kotlin.collections.List((kotlin.String)))/components">components</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLBuilder</span></a></code></div>

Encode <a href="path.html#io.ktor.http.URLBuilder$path(kotlin.Array((kotlin.String)))/components">components</a> to <a href="encoded-path.html">encodedPath</a>


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../clone.html">clone</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">clone</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLBuilder</span></a></code></div>

Create a copy of this builder. Modifications in a copy is not reflected in the original instance and vise-versa.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../take-from.html">takeFrom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URI)/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URI.html"><span class="identifier">URI</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Take URI components from <a href="../take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URI)/uri">uri</a>

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URL)/url">url</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URL.html"><span class="identifier">URL</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Take URI components from <a href="../take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URL)/url">url</a>

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, kotlin.String)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLBuilder</span></a></code></div>

Take url parts from <a href="../take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, kotlin.String)/urlString">urlString</a>
throws <a href="../-u-r-l-parser-exception/index.html">URLParserException</a>

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.URLBuilder)/url">url</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">URLBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLBuilder</span></a></code></div>

Take components from another <a href="../take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.URLBuilder)/url">url</a> builder

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.Url)/url">url</span><span class="symbol">:</span>&nbsp;<a href="../-url/index.html"><span class="identifier">Url</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLBuilder</span></a></code></div>

Take components from another <a href="../take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.Url)/url">url</a>


</td>
</tr>
</tbody>
</table>

### Companion Object Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/create-from-call.html">createFromCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">URLBuilder.Companion</span><span class="symbol">.</span><span class="identifier">createFromCall</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$createFromCall(io.ktor.http.URLBuilder.Companion, io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLBuilder</span></a></code></div>

Creates an url using current call's schema, path and parameters as initial


</td>
</tr>
</tbody>
</table>
