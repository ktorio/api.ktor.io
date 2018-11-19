---
title: ApplicationCallPipeline - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="./index.html">ApplicationCallPipeline</a></div>

# ApplicationCallPipeline

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ApplicationCallPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Pipeline configuration for executing <a href="../-application-call/index.html">ApplicationCall</a> instances

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ApplicationCallPipeline</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Pipeline configuration for executing <a href="../-application-call/index.html">ApplicationCall</a> instances


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="receive-pipeline.html">receivePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">receivePipeline</span><span class="symbol">: </span><a href="../../io.ktor.request/-application-receive-pipeline/index.html"><span class="identifier">ApplicationReceivePipeline</span></a></code></div>

Pipeline for receiving content


</td>
</tr>
<tr>
<td markdown="1">

<a href="send-pipeline.html">sendPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">sendPipeline</span><span class="symbol">: </span><a href="../../io.ktor.response/-application-send-pipeline/index.html"><span class="identifier">ApplicationSendPipeline</span></a></code></div>

Pipeline for sending content


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

<a href="-call.html">Call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Call</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Phase for processing a call and sending a response


</td>
</tr>
<tr>
<td markdown="1">

<a href="-fallback.html">Fallback</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Fallback</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Phase for handling unprocessed calls


</td>
</tr>
<tr>
<td markdown="1">

<a href="-features.html">Features</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Features</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Phase for features. Most features should intercept this phase.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-infrastructure.html">Infrastructure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">Infrastructure</span></s><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Phase for setting up infrastructure for processing a call


</td>
</tr>
<tr>
<td markdown="1">

<a href="-monitoring.html">Monitoring</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Monitoring</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Phase for tracing calls, useful for logging, metrics, error handling and so on


</td>
</tr>
<tr>
<td markdown="1">

<a href="-setup.html">Setup</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Setup</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Phase for preparing call and it's attributes for processing


</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/conversion-service.html">conversionService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">.</span><span class="identifier">conversionService</span><span class="symbol">: </span><a href="../../io.ktor.util/-conversion-service/index.html"><span class="identifier">ConversionService</span></a></code></div>

Lookup for a conversion service. Returns the default one if the feature wasn't installed


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

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-application/index.html">Application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Application</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><span class="identifier">CoroutineScope</span></code></div>

Represents configured and running web application, capable of handling requests.
It is also the application coroutine scope that is cancelled immediately at application stop so useful
for launching background coroutines.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.routing/-route/index.html">Route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Route</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ApplicationCallPipeline</span></a></code></div>

Describes a node in a routing tree


</td>
</tr>
</tbody>
</table>
