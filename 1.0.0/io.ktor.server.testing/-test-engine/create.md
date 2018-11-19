---
title: TestEngine.create - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.testing</a> / <a href="index.html">TestEngine</a> / <a href="./create.html">create</a></div>

# create

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing.TestEngine$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)))/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.testing.TestEngine$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../-test-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a></code></div>

Overrides <a href="../../io.ktor.server.engine/-application-engine-factory/create.html">ApplicationEngineFactory.create</a>

Creates an engine from the given <a href="create.html#io.ktor.server.testing.TestEngine$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)))/environment">environment</a> and <a href="create.html#io.ktor.server.testing.TestEngine$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.testing.TestApplicationEngine.Configuration, kotlin.Unit)))/configure">configure</a> script

