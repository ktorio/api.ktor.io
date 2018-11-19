---
title: FrameType.BINARY - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">FrameType</a> / <a href="./-b-i-n-a-r-y.html">BINARY</a></div>

# BINARY

<div class="signature"><code><span class="identifier">BINARY</span></code></div>

Regular application level binary frame

### Inherited Properties

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
