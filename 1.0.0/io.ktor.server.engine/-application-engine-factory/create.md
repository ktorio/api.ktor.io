---
title: ApplicationEngineFactory.create - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="index.html">ApplicationEngineFactory</a> / <a href="./create.html">create</a></div>

# create

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="index.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#TEngine"><span class="identifier">TEngine</span></a></code></div>

Creates an engine from the given <a href="create.html#io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/environment">environment</a> and <a href="create.html#io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/configure">configure</a> script

