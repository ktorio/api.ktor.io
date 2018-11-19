---
title: Pipeline.intercept - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.pipeline</a> / <a href="index.html">Pipeline</a> / <a href="./intercept.html">intercept</a></div>

# intercept

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="index.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds <a href="intercept.html#io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/block">block</a> to the <a href="intercept.html#io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/phase">phase</a> of this pipeline

