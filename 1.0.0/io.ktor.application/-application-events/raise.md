---
title: ApplicationEvents.raise - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="index.html">ApplicationEvents</a> / <a href="./raise.html">raise</a></div>

# raise

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">raise</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/definition">definition</span><span class="symbol">:</span>&nbsp;<a href="../-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="raise.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="raise.html#T"><span class="identifier">T</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Rise an event specified by <a href="raise.html#io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/definition">definition</a> with the specified <a href="raise.html#io.ktor.application.ApplicationEvents$raise(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.raise.T)), io.ktor.application.ApplicationEvents.raise.T)/value">value</a> and call all handlers

Handlers are called in order of subscriptions.
If some handler throws an exception, all handlers will still run and then exception will be rethrown.

