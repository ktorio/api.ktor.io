---
title: SessionTransportTransformerDigest.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTransportTransformerDigest</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">SessionTransportTransformerDigest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/salt">salt</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"ktor"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"SHA-256"<span class="symbol">)</span></code></div>

Session transformer that appends an <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/algorithm">algorithm</a> hash of the input.
Where the input is either a session contents or a previous transformation.
It prepends a <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerDigest$<init>(kotlin.String, kotlin.String)/salt">salt</a> when computing the hash.

