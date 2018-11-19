---
title: CallLogging.Configuration.mdc - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CallLogging</a> / <a href="index.html">Configuration</a> / <a href="./mdc.html">mdc</a></div>

# mdc

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">mdc</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Put a diagnostic context value to <a href="#">MDC</a> with the specified <a href="mdc.html#io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/name">name</a> and computed using <a href="mdc.html#io.ktor.features.CallLogging.Configuration$mdc(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.String)))/provider">provider</a> function.
A value will be available in MDC only during <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a> lifetime and will be removed after call
processing.

