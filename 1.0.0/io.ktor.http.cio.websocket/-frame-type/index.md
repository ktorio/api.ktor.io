---
title: FrameType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="./index.html">FrameType</a></div>

# FrameType

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">FrameType</span></code></div>

Frame types enum

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-t-e-x-t.html">TEXT</a>


</td>
<td markdown="1">

Regular application level text frame


</td>
</tr>
<tr>
<td markdown="1">

<a href="-b-i-n-a-r-y.html">BINARY</a>


</td>
<td markdown="1">

Regular application level binary frame


</td>
</tr>
<tr>
<td markdown="1">

<a href="-c-l-o-s-e.html">CLOSE</a>


</td>
<td markdown="1">

Low level close frame type


</td>
</tr>
<tr>
<td markdown="1">

<a href="-p-i-n-g.html">PING</a>


</td>
<td markdown="1">

Low level ping frame type


</td>
</tr>
<tr>
<td markdown="1">

<a href="-p-o-n-g.html">PONG</a>


</td>
<td markdown="1">

Low level pong frame type


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="control-frame.html">controlFrame</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">controlFrame</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

if this is control frame type


</td>
</tr>
<tr>
<td markdown="1">

<a href="opcode.html">opcode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">opcode</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>
* frame type id that is used to transport it

</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.FrameType.Companion$get(kotlin.Int)/opcode">opcode</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">FrameType</span></a><span class="symbol">?</span></code></div>

Find <a href="./index.md">FrameType</a> instance by numeric <a href="get.html#io.ktor.http.cio.websocket.FrameType.Companion$get(kotlin.Int)/opcode">opcode</a>


</td>
</tr>
</tbody>
</table>
