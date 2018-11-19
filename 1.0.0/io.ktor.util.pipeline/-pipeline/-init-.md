---
title: Pipeline.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.pipeline</a> / <a href="index.html">Pipeline</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Pipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$<init>(io.ktor.util.pipeline.PipelinePhase, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$<init>(io.ktor.util.pipeline.PipelinePhase, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))))/interceptors">interceptors</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="index.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Pipeline</span><span class="symbol">(</span><span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.util.pipeline.Pipeline$<init>(kotlin.Array((io.ktor.util.pipeline.PipelinePhase)))/phases">phases</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">)</span></code></div>

Represents an execution pipeline for asynchronous extensible computations

</div>
