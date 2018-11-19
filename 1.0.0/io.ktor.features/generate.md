---
title: generate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./generate.html">generate</a></div>

# generate

<div class="signature"><code><span class="keyword">fun </span><a href="-call-id/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">generate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;64<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/dictionary">dictionary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;CALL_ID_DEFAULT_DICTIONARY<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Generates fixed <a href="generate.html#io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/length">length</a> call ids using the specified <a href="generate.html#io.ktor.features$generate(io.ktor.features.CallId.Configuration, kotlin.Int, kotlin.String)/dictionary">dictionary</a>.
Please note that this function generates pseudo-random identifiers via regular <a href="http://docs.oracle.com/javase/6/docs/api/java/util/Random.html">java.util.Random</a>
and should not be considered as cryptographically secure.
Also note that you should use the same dictionary for <a href="-call-id-verifier.html">CallIdVerifier</a> otherwise a generated call id could be
discarded or may lead to complete call rejection.

### Parameters

<code>length</code> - of call ids to be generated, should be positive

<code>dictionary</code> - to be used to generate ids, shouldn't be empty and it shouldn't contain duplicates

**See Also**

<a href="-call-id/-configuration/verify.html">CallId.Configuration.verify</a>

