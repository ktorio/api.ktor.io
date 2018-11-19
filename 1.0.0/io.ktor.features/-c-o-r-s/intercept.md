---
title: CORS.intercept - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">CORS</a> / <a href="./intercept.html">intercept</a></div>

# intercept

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CORS$intercept(io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)))/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Feature's call interceptor that does all the job. Usually there is no need to install it as it is done during
feature installation

