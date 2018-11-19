---
title: SessionTransportTransformerMessageAuthentication.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTransportTransformerMessageAuthentication</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">SessionTransportTransformerMessageAuthentication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(kotlin.ByteArray, kotlin.String)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(kotlin.ByteArray, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"HmacSHA1"<span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">SessionTransportTransformerMessageAuthentication</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/keySpec">keySpec</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/javax/crypto/spec/SecretKeySpec.html"><span class="identifier">SecretKeySpec</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"HmacSHA1"<span class="symbol">)</span></code></div>

Session transformer that appends an <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/algorithm">algorithm</a> MAC (Message Authentication Code) hash of the input.
Where the input is either a session contents or a previous transformation.
It uses a specified <a href="-init-.html#io.ktor.sessions.SessionTransportTransformerMessageAuthentication$<init>(javax.crypto.spec.SecretKeySpec, kotlin.String)/keySpec">keySpec</a> when generating the Mac hash.

</div>
