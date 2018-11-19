---
title: ChannelIOException.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="index.html">ChannelIOException</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">ChannelIOException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.cio.ChannelIOException$<init>(kotlin.String, kotlin.Throwable)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.cio.ChannelIOException$<init>(kotlin.String, kotlin.Throwable)/exception">exception</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">)</span></code></div>

An exception thrown when an IO error occurred during reading or writing to/from the underlying channel.
The typical error is "connection reset" and so on.

