---
title: URLProtocol - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">URLProtocol</a></div>

# URLProtocol

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">URLProtocol</span></code></div>

Represents URL protocol

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">URLProtocol</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.URLProtocol$<init>(kotlin.String, kotlin.Int)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.URLProtocol$<init>(kotlin.String, kotlin.Int)/defaultPort">defaultPort</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span></code></div>

Represents URL protocol


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="default-port.html">defaultPort</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">defaultPort</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

default port for protocol or <code>-1</code> if not known


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

of protocol (schema)


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-h-t-t-p.html">HTTP</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HTTP</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLProtocol</span></a></code></div>

HTTP with port 80


</td>
</tr>
<tr>
<td markdown="1">

<a href="-h-t-t-p-s.html">HTTPS</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HTTPS</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLProtocol</span></a></code></div>

secure HTTPS with port 443


</td>
</tr>
<tr>
<td markdown="1">

<a href="-w-s.html">WS</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">WS</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLProtocol</span></a></code></div>

Web socket over HTTP on port 80


</td>
</tr>
<tr>
<td markdown="1">

<a href="-w-s-s.html">WSS</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">WSS</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLProtocol</span></a></code></div>

Web socket over secure HTTPS on port 443


</td>
</tr>
<tr>
<td markdown="1">

<a href="by-name.html">byName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">byName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">URLProtocol</span></a><span class="symbol">&gt;</span></code></div>

Protocols by names map


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create-or-default.html">createOrDefault</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">createOrDefault</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.URLProtocol.Companion$createOrDefault(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">URLProtocol</span></a></code></div>

Create an instance by <a href="create-or-default.html#io.ktor.http.URLProtocol.Companion$createOrDefault(kotlin.String)/name">name</a> or use already existing instance


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../is-secure.html">isSecure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLProtocol</span></a><span class="symbol">.</span><span class="identifier">isSecure</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if the protocol is secure


</td>
</tr>
<tr>
<td markdown="1">

<a href="../is-websocket.html">isWebsocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">URLProtocol</span></a><span class="symbol">.</span><span class="identifier">isWebsocket</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if the protocol is websocket


</td>
</tr>
</tbody>
</table>
