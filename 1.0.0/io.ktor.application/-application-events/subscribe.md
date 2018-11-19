---
title: ApplicationEvents.subscribe - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="index.html">ApplicationEvents</a> / <a href="./subscribe.html">subscribe</a></div>

# subscribe

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">subscribe</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/definition">definition</span><span class="symbol">:</span>&nbsp;<a href="../-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="subscribe.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../-event-handler.html"><span class="identifier">EventHandler</span></a><span class="symbol">&lt;</span><a href="subscribe.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">DisposableHandle</span></code></div>

Subscribe <a href="subscribe.html#io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/handler">handler</a> to an event specified by <a href="subscribe.html#io.ktor.application.ApplicationEvents$subscribe(io.ktor.application.EventDefinition((io.ktor.application.ApplicationEvents.subscribe.T)), kotlin.Function1((io.ktor.application.ApplicationEvents.subscribe.T, kotlin.Unit)))/definition">definition</a>

