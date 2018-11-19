---
title: Url - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">Url</a></div>

# Url

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Url</span></code></div>

Represents an immutable URL

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/protocol">protocol</span><span class="symbol">:</span>&nbsp;<a href="../-u-r-l-protocol/index.html"><span class="identifier">URLProtocol</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/specifiedPort">specifiedPort</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/encodedPath">encodedPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/fragment">fragment</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/user">user</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/password">password</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Url$<init>(io.ktor.http.URLProtocol, kotlin.String, kotlin.Int, kotlin.String, io.ktor.http.Parameters, kotlin.String, kotlin.String, kotlin.String, kotlin.Boolean)/trailingQuery">trailingQuery</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span></code></div>

Represents an immutable URL


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">encodedPath</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

encoded path without query string


</td>
</tr>
<tr>
<td markdown="1">

<a href="fragment.html">fragment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">fragment</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

URL fragment (anchor name)


</td>
</tr>
<tr>
<td markdown="1">

<a href="host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

name without port (domain)


</td>
</tr>
<tr>
<td markdown="1">

<a href="parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="../-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

URL query parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="password.html">password</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">password</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

password part of URL


</td>
</tr>
<tr>
<td markdown="1">

<a href="port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

the specified port or protocol default port


</td>
</tr>
<tr>
<td markdown="1">

<a href="protocol.html">protocol</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">protocol</span><span class="symbol">: </span><a href="../-u-r-l-protocol/index.html"><span class="identifier">URLProtocol</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="specified-port.html">specifiedPort</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">specifiedPort</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

port number that was specified to override protocol's default


</td>
</tr>
<tr>
<td markdown="1">

<a href="trailing-query.html">trailingQuery</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">trailingQuery</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

keep trailing question character even if there are no query parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="user.html">user</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">user</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

username part of URL


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../full-path.html">fullPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">Url</span></a><span class="symbol">.</span><span class="identifier">fullPath</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Full encoded path with query string but without domain, port and schema


</td>
</tr>
<tr>
<td markdown="1">

<a href="../host-with-port.html">hostWithPort</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">Url</span></a><span class="symbol">.</span><span class="identifier">hostWithPort</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Host:port pair, not normalized so port is always specified even if the port is schema's default


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../to-u-r-i.html">toURI</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Url</span></a><span class="symbol">.</span><span class="identifier">toURI</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/URI.html"><span class="identifier">URI</span></a></code></div>

Convert <a href="./index.md">Url</a> to <a href="http://docs.oracle.com/javase/6/docs/api/java/net/URI.html">URI</a>


</td>
</tr>
</tbody>
</table>

### Companion Object Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">Url.Companion</span><span class="symbol">.</span><span class="identifier">invoke</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$invoke(io.ktor.http.Url.Companion, kotlin.String)/fullUrl">fullUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">Url</span></a></code></div>

Construct <a href="./index.md">Url</a> from <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>


</td>
</tr>
</tbody>
</table>
