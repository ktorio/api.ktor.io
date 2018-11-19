---
title: Jetty - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.jetty</a> / <a href="./index.html">Jetty</a></div>

# Jetty

<div class="signature"><code><span class="keyword">object </span><span class="identifier">Jetty</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.server.engine/-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../-jetty-application-engine/index.html"><span class="identifier">JettyApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../-jetty-application-engine-base/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="../../io.ktor.server.engine/-application-engine-factory/index.html">ApplicationEngineFactory</a> providing a Jetty-based <a href="../../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create.html">create</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.jetty.Jetty$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.jetty.JettyApplicationEngineBase.Configuration, kotlin.Unit)))/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.jetty.Jetty$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.jetty.JettyApplicationEngineBase.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../-jetty-application-engine-base/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-jetty-application-engine/index.html"><span class="identifier">JettyApplicationEngine</span></a></code></div>

Creates an engine from the given <a href="create.html#io.ktor.server.jetty.Jetty$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.jetty.JettyApplicationEngineBase.Configuration, kotlin.Unit)))/environment">environment</a> and <a href="create.html#io.ktor.server.jetty.Jetty$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.jetty.JettyApplicationEngineBase.Configuration, kotlin.Unit)))/configure">configure</a> script


</td>
</tr>
</tbody>
</table>
