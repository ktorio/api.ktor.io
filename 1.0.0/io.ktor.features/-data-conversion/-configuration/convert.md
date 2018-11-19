---
title: DataConversion.Configuration.convert - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">DataConversion</a> / <a href="index.html">Configuration</a> / <a href="./convert.html">convert</a></div>

# convert

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">convert</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), io.ktor.util.ConversionService)/klass">klass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), io.ktor.util.ConversionService)/convertor">convertor</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.util/-conversion-service/index.html"><span class="identifier">ConversionService</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a <a href="convert.html#io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), io.ktor.util.ConversionService)/convertor">convertor</a> for <a href="convert.html#io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), io.ktor.util.ConversionService)/klass">klass</a> type

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">convert</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KType, io.ktor.util.ConversionService)/ktype">ktype</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-type/index.html"><span class="identifier">KType</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KType, io.ktor.util.ConversionService)/convertor">convertor</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.util/-conversion-service/index.html"><span class="identifier">ConversionService</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a <a href="convert.html#io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KType, io.ktor.util.ConversionService)/convertor">convertor</a> for <a href="convert.html#io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KType, io.ktor.util.ConversionService)/ktype">ktype</a> type

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">convert</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), kotlin.Function1((io.ktor.features.DelegatingConversionService, kotlin.Unit)))/klass">klass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), kotlin.Function1((io.ktor.features.DelegatingConversionService, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-delegating-conversion-service/index.html"><span class="identifier">DelegatingConversionService</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register and <a href="convert.html#io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), kotlin.Function1((io.ktor.features.DelegatingConversionService, kotlin.Unit)))/configure">configure</a> convertor for type <a href="convert.html#io.ktor.features.DataConversion.Configuration$convert(kotlin.reflect.KClass((kotlin.Any)), kotlin.Function1((io.ktor.features.DelegatingConversionService, kotlin.Unit)))/klass">klass</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">convert</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">noinline</span> <span class="parameterName" id="io.ktor.features.DataConversion.Configuration$convert(kotlin.Function1((io.ktor.features.DelegatingConversionService, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../-delegating-conversion-service/index.html"><span class="identifier">DelegatingConversionService</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register and <a href="convert.html#io.ktor.features.DataConversion.Configuration$convert(kotlin.Function1((io.ktor.features.DelegatingConversionService, kotlin.Unit)))/configure">configure</a> convertor for reified type <a href="convert.html#T">T</a>

</div>
