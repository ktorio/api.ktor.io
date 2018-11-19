---
title: io.ktor.pipeline - 
layout: api
---



## Package io.ktor.pipeline

### Type Aliases

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-context-dsl.html">ContextDsl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">ContextDsl</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.util.pipeline/-context-dsl/index.html"><span class="identifier">ContextDsl</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-invalid-phase-exception.html">InvalidPhaseException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">InvalidPhaseException</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.util.pipeline/-invalid-phase-exception/index.html"><span class="identifier">InvalidPhaseException</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-pipeline.html">Pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">Pipeline</span></s><span class="symbol">&lt;</span><span class="identifier">TSubject</span><span class="symbol">, </span><span class="identifier">TContext</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="-pipeline.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="-pipeline.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-pipeline-context.html">PipelineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">PipelineContext</span></s><span class="symbol">&lt;</span><span class="identifier">TSubject</span><span class="symbol">, </span><span class="identifier">TContext</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="-pipeline-context.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="-pipeline-context.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-pipeline-interceptor.html">PipelineInterceptor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">PipelineInterceptor</span></s><span class="symbol">&lt;</span><span class="identifier">TSubject</span><span class="symbol">, </span><span class="identifier">TContext</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="-pipeline-interceptor.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="-pipeline-interceptor.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-pipeline-phase.html">PipelinePhase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">PipelinePhase</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

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
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-pipeline.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="execute.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><s><span class="identifier">execute</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$execute(io.ktor.util.pipeline.Pipeline((kotlin.Unit, io.ktor.pipeline.execute.TContext)), io.ktor.pipeline.execute.TContext)/context">context</span><span class="symbol">:</span>&nbsp;<a href="execute.html#TContext"><span class="identifier">TContext</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="-pipeline.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><s><span class="identifier">intercept</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.pipeline.intercept.TSubject, io.ktor.pipeline.intercept.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="-pipeline-phase.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.pipeline.intercept.TSubject, io.ktor.pipeline.intercept.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-pipeline-context.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
