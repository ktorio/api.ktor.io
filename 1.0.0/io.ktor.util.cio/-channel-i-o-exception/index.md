---
title: ChannelIOException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="./index.html">ChannelIOException</a></div>

# ChannelIOException

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ChannelIOException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/IOException.html"><span class="identifier">IOException</span></a></code></div>

An exception thrown when an IO error occurred during reading or writing to/from the underlying channel.
The typical error is "connection reset" and so on.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ChannelIOException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.cio.ChannelIOException$<init>(kotlin.String, kotlin.Throwable)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.cio.ChannelIOException$<init>(kotlin.String, kotlin.Throwable)/exception">exception</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">)</span></code></div>

An exception thrown when an IO error occurred during reading or writing to/from the underlying channel.
The typical error is "connection reset" and so on.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-channel-read-exception/index.html">ChannelReadException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ChannelReadException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ChannelIOException</span></a></code></div>

An exception that is thrown when an IO error occurred during reading from the request channel.
Usually it happens when a remote client closed the connection.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-channel-write-exception/index.html">ChannelWriteException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ChannelWriteException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ChannelIOException</span></a></code></div>

An exception that is thrown when an IO error occurred during writing to the destination channel.
Usually it happens when a remote client closed the connection.


</td>
</tr>
</tbody>
</table>
