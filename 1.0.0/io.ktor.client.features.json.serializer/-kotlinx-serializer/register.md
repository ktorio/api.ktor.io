---
title: KotlinxSerializer.register - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.json.serializer</a> / <a href="index.html">KotlinxSerializer</a> / <a href="./register.html">register</a></div>

# register

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">register</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.json.serializer.KotlinxSerializer$register(kotlinx.serialization.KSerializer((io.ktor.client.features.json.serializer.KotlinxSerializer.register.T)))/mapper">mapper</span><span class="symbol">:</span>&nbsp;<span class="identifier">KSerializer</span><span class="symbol">&lt;</span><a href="register.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set the mapping from <a href="register.html#T">T</a> to <a href="register.html#io.ktor.client.features.json.serializer.KotlinxSerializer$register(kotlinx.serialization.KSerializer((io.ktor.client.features.json.serializer.KotlinxSerializer.register.T)))/mapper">mapper</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">register</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set the mapping from <a href="register.html#T">T</a> to it's <a href="#">KSerializer</a>. This method only works for non-parameterized types.

</div>
