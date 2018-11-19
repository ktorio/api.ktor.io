---
title: ChannelReadException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="./index.html">ChannelReadException</a></div>

# ChannelReadException

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ChannelReadException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-channel-i-o-exception/index.html"><span class="identifier">ChannelIOException</span></a></code></div>

An exception that is thrown when an IO error occurred during reading from the request channel.
Usually it happens when a remote client closed the connection.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ChannelReadException</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio.ChannelReadException$<init>(kotlin.String, kotlin.Throwable)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"Cannot read from a channel"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio.ChannelReadException$<init>(kotlin.String, kotlin.Throwable)/exception">exception</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">)</span></code></div>

An exception that is thrown when an IO error occurred during reading from the request channel.
Usually it happens when a remote client closed the connection.


</td>
</tr>
</tbody>
</table>
