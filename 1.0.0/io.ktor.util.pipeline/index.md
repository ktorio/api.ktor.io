---
title: io.ktor.util.pipeline - 
layout: api
---



## Package io.ktor.util.pipeline

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-pipeline/index.html">Pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Pipeline</span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Represents an execution pipeline for asynchronous extensible computations


</td>
</tr>
<tr>
<td markdown="1">

<a href="-pipeline-context/index.html">PipelineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">PipelineContext</span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Represents running execution of a pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="-pipeline-executor/index.html">PipelineExecutor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">PipelineExecutor</span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span></code></div>

Represent an object that launches pipeline execution


</td>
</tr>
<tr>
<td markdown="1">

<a href="-pipeline-phase/index.html">PipelinePhase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">PipelinePhase</span></code></div>

Represents a phase in a pipeline


</td>
</tr>
</tbody>
</table>

### Annotations

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-context-dsl/index.html">ContextDsl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">ContextDsl</span></code></div>

DslMarker for pipeline execution context


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-invalid-phase-exception/index.html">InvalidPhaseException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">InvalidPhaseException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a></code></div>

An exception about misconfigured phases in a pipeline


</td>
</tr>
</tbody>
</table>

### Type Aliases

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-pipeline-interceptor.html">PipelineInterceptor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><span class="identifier">PipelineInterceptor</span><span class="symbol">&lt;</span><span class="identifier">TSubject</span><span class="symbol">, </span><span class="identifier">TContext</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;<span class="keyword">suspend </span><a href="-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="-pipeline-interceptor.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="-pipeline-interceptor.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="-pipeline-interceptor.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Represents an interceptor type which is a suspend extension function for context


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="execute.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$execute(io.ktor.util.pipeline.Pipeline((kotlin.Unit, io.ktor.util.pipeline.execute.TContext)), io.ktor.util.pipeline.execute.TContext)/context">context</span><span class="symbol">:</span>&nbsp;<a href="execute.html#TContext"><span class="identifier">TContext</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Executes this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Intercepts an untyped pipeline when the subject is of the given type


</td>
</tr>
<tr>
<td markdown="1">

<a href="pipeline-executor-for.html">pipelineExecutorFor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">pipelineExecutorFor</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$pipelineExecutorFor(io.ktor.util.pipeline.pipelineExecutorFor.TContext, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.pipelineExecutorFor.TSubject, io.ktor.util.pipeline.pipelineExecutorFor.TContext)), , kotlin.Unit)))), io.ktor.util.pipeline.pipelineExecutorFor.TSubject)/context">context</span><span class="symbol">:</span>&nbsp;<a href="pipeline-executor-for.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$pipelineExecutorFor(io.ktor.util.pipeline.pipelineExecutorFor.TContext, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.pipelineExecutorFor.TSubject, io.ktor.util.pipeline.pipelineExecutorFor.TContext)), , kotlin.Unit)))), io.ktor.util.pipeline.pipelineExecutorFor.TSubject)/interceptors">interceptors</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="pipeline-executor-for.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="pipeline-executor-for.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$pipelineExecutorFor(io.ktor.util.pipeline.pipelineExecutorFor.TContext, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.pipelineExecutorFor.TSubject, io.ktor.util.pipeline.pipelineExecutorFor.TContext)), , kotlin.Unit)))), io.ktor.util.pipeline.pipelineExecutorFor.TSubject)/subject">subject</span><span class="symbol">:</span>&nbsp;<a href="pipeline-executor-for.html#TSubject"><span class="identifier">TSubject</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-pipeline-executor/index.html"><span class="identifier">PipelineExecutor</span></a><span class="symbol">&lt;</span><a href="pipeline-executor-for.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">&gt;</span></code></div>

Build a pipeline of the specified <a href="pipeline-executor-for.html#io.ktor.util.pipeline$pipelineExecutorFor(io.ktor.util.pipeline.pipelineExecutorFor.TContext, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.pipelineExecutorFor.TSubject, io.ktor.util.pipeline.pipelineExecutorFor.TContext)), , kotlin.Unit)))), io.ktor.util.pipeline.pipelineExecutorFor.TSubject)/interceptors">interceptors</a> and create executor


</td>
</tr>
</tbody>
</table>
