---
title: HttpReceivePipeline - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.response</a> / <a href="./index.html">HttpReceivePipeline</a></div>

# HttpReceivePipeline

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpReceivePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="../-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">&gt;</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for receiving <a href="../-http-response/index.html">HttpResponse</a> without any processing.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpReceivePipeline</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for receiving <a href="../-http-response/index.html">HttpResponse</a> without any processing.


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/attributes.html">attributes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">attributes</span><span class="symbol">: </span><a href="../../io.ktor.util/-attributes/index.html"><span class="identifier">Attributes</span></a></code></div>

Provides common place to store pipeline attributes


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/is-empty.html">isEmpty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">isEmpty</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/items.html">items</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">items</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">&gt;</span></code></div>

Phases of this pipeline


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/add-phase.html">addPhase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">addPhase</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.pipeline.Pipeline$addPhase(io.ktor.util.pipeline.PipelinePhase)/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds <a href="../../io.ktor.util.pipeline/-pipeline/add-phase.html#io.ktor.util.pipeline.Pipeline$addPhase(io.ktor.util.pipeline.PipelinePhase)/phase">phase</a> to the end of this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/after-intercepted.html">afterIntercepted</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">afterIntercepted</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Invoked after an interceptor has been installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/subject">subject</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html#TSubject"><span class="identifier">TSubject</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline/index.html#TSubject"><span class="identifier">TSubject</span></a></code></div>

Executes this pipeline in the given <a href="../../io.ktor.util.pipeline/-pipeline/execute.html#io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/context">context</a> and with the given <a href="../../io.ktor.util.pipeline/-pipeline/execute.html#io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/subject">subject</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/insert-phase-after.html">insertPhaseAfter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">insertPhaseAfter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Inserts <a href="../../io.ktor.util.pipeline/-pipeline/insert-phase-after.html#io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</a> after the <a href="../../io.ktor.util.pipeline/-pipeline/insert-phase-after.html#io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</a> phase


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/insert-phase-before.html">insertPhaseBefore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">insertPhaseBefore</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Inserts <a href="../../io.ktor.util.pipeline/-pipeline/insert-phase-before.html#io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</a> before the <a href="../../io.ktor.util.pipeline/-pipeline/insert-phase-before.html#io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</a> phase


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.util.pipeline/-pipeline/index.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds <a href="../../io.ktor.util.pipeline/-pipeline/intercept.html#io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/block">block</a> to the <a href="../../io.ktor.util.pipeline/-pipeline/intercept.html#io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/phase">phase</a> of this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/-pipeline/merge.html">merge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">merge</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.pipeline.Pipeline$merge(io.ktor.util.pipeline.Pipeline((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)))/from">from</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.util.pipeline/-pipeline/index.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Merges another pipeline into this pipeline, maintaining relative phases order


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-after.html">After</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">After</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Latest response pipeline phase


</td>
</tr>
<tr>
<td markdown="1">

<a href="-before.html">Before</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Before</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

The earliest phase that happens before any other


</td>
</tr>
<tr>
<td markdown="1">

<a href="-state.html">State</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">State</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Use this phase to store request shared state


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.pipeline/execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.pipeline/-pipeline.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><s><span class="identifier">execute</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$execute(io.ktor.util.pipeline.Pipeline((kotlin.Unit, io.ktor.pipeline.execute.TContext)), io.ktor.pipeline.execute.TContext)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$execute(io.ktor.util.pipeline.Pipeline((kotlin.Unit, io.ktor.util.pipeline.execute.TContext)), io.ktor.util.pipeline.execute.TContext)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/execute.html#TContext"><span class="identifier">TContext</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Executes this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.pipeline/intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.pipeline/-pipeline.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><s><span class="identifier">intercept</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.pipeline.intercept.TSubject, io.ktor.pipeline.intercept.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.pipeline/-pipeline-phase.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.pipeline.intercept.TSubject, io.ktor.pipeline.intercept.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.pipeline/-pipeline-context.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util.pipeline/intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.util.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util.pipeline/intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.util.pipeline/intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Intercepts an untyped pipeline when the subject is of the given type


</td>
</tr>
</tbody>
</table>
