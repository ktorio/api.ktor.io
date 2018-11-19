---
title: Locations.resolve - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.locations</a> / <a href="index.html">Locations</a> / <a href="./resolve.html">resolve</a></div>

# resolve

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">resolve</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/locationClass">locationClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="resolve.html#T"><span class="identifier">T</span></a></code></div>

Resolves parameters in a <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/call">call</a> to an instance of specified <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.application.ApplicationCall)/locationClass">locationClass</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">resolve</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/locationClass">locationClass</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="resolve.html#T"><span class="identifier">T</span></a></code></div>

Resolves <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/parameters">parameters</a> to an instance of specified <a href="resolve.html#io.ktor.locations.Locations$resolve(kotlin.reflect.KClass((kotlin.Any)), io.ktor.http.Parameters)/locationClass">locationClass</a>.

</div>
