---
title: HttpAuthHeader.basicAuthChallenge - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">HttpAuthHeader</a> / <a href="./basic-auth-challenge.html">basicAuthChallenge</a></div>

# basicAuthChallenge

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">basicAuthChallenge</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$basicAuthChallenge(kotlin.String, java.nio.charset.Charset)/realm">realm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Companion$basicAuthChallenge(kotlin.String, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-parameterized/index.html"><span class="identifier">Parameterized</span></a></code></div>

Generates an <a href="../-auth-scheme/-basic.html">AuthScheme.Basic</a> challenge as a <a href="index.html">HttpAuthHeader</a>.

