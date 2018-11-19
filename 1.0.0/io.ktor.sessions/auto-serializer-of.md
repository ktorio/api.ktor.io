---
title: autoSerializerOf - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.sessions</a> / <a href="./auto-serializer-of.html">autoSerializerOf</a></div>

# autoSerializerOf

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">autoSerializerOf</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-session-serializer-reflection/index.html"><span class="identifier">SessionSerializerReflection</span></a><span class="symbol">&lt;</span><a href="auto-serializer-of.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Creates the the default <a href="-session-serializer/index.html">SessionSerializer</a> for type <a href="auto-serializer-of.html#T">T</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">autoSerializerOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$autoSerializerOf(kotlin.reflect.KClass((io.ktor.sessions.autoSerializerOf.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="auto-serializer-of.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-session-serializer-reflection/index.html"><span class="identifier">SessionSerializerReflection</span></a><span class="symbol">&lt;</span><a href="auto-serializer-of.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Creates the the default <a href="-session-serializer/index.html">SessionSerializer</a> for class <a href="auto-serializer-of.html#io.ktor.sessions$autoSerializerOf(kotlin.reflect.KClass((io.ktor.sessions.autoSerializerOf.T)))/type">type</a>

</div>
