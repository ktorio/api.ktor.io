---
title: expectedDigest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./expected-digest.html">expectedDigest</a></div>

# expectedDigest

<div class="signature"><code><span class="keyword">fun </span><a href="-digest-credential/index.html"><span class="identifier">DigestCredential</span></a><span class="symbol">.</span><span class="identifier">expectedDigest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/digester">digester</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/MessageDigest.html"><span class="identifier">MessageDigest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$expectedDigest(io.ktor.auth.DigestCredential, io.ktor.http.HttpMethod, java.security.MessageDigest, kotlin.ByteArray)/userNameRealmPasswordDigest">userNameRealmPasswordDigest</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Calculates expected digest bytes for this <a href="-digest-credential/index.html">DigestCredential</a>

