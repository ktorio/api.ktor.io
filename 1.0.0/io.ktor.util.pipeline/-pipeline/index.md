---
title: Pipeline - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.pipeline</a> / <a href="./index.html">Pipeline</a></div>

# Pipeline

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Pipeline</span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Represents an execution pipeline for asynchronous extensible computations

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Pipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$<init>(io.ktor.util.pipeline.PipelinePhase, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$<init>(io.ktor.util.pipeline.PipelinePhase, kotlin.collections.List((kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))))/interceptors">interceptors</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="index.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">Pipeline</span><span class="symbol">(</span><span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.util.pipeline.Pipeline$<init>(kotlin.Array((io.ktor.util.pipeline.PipelinePhase)))/phases">phases</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">)</span></code></div>

Represents an execution pipeline for asynchronous extensible computations


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="attributes.html">attributes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">attributes</span><span class="symbol">: </span><a href="../../io.ktor.util/-attributes/index.html"><span class="identifier">Attributes</span></a></code></div>

Provides common place to store pipeline attributes


</td>
</tr>
<tr>
<td markdown="1">

<a href="is-empty.html">isEmpty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">isEmpty</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="items.html">items</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">items</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">&gt;</span></code></div>

Phases of this pipeline


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="add-phase.html">addPhase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">addPhase</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.pipeline.Pipeline$addPhase(io.ktor.util.pipeline.PipelinePhase)/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds <a href="add-phase.html#io.ktor.util.pipeline.Pipeline$addPhase(io.ktor.util.pipeline.PipelinePhase)/phase">phase</a> to the end of this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="after-intercepted.html">afterIntercepted</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">afterIntercepted</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Invoked after an interceptor has been installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/context">context</span><span class="symbol">:</span>&nbsp;<a href="index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/subject">subject</span><span class="symbol">:</span>&nbsp;<a href="index.html#TSubject"><span class="identifier">TSubject</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#TSubject"><span class="identifier">TSubject</span></a></code></div>

Executes this pipeline in the given <a href="execute.html#io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/context">context</a> and with the given <a href="execute.html#io.ktor.util.pipeline.Pipeline$execute(io.ktor.util.pipeline.Pipeline.TContext, io.ktor.util.pipeline.Pipeline.TSubject)/subject">subject</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="insert-phase-after.html">insertPhaseAfter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">insertPhaseAfter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Inserts <a href="insert-phase-after.html#io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</a> after the <a href="insert-phase-after.html#io.ktor.util.pipeline.Pipeline$insertPhaseAfter(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</a> phase


</td>
</tr>
<tr>
<td markdown="1">

<a href="insert-phase-before.html">insertPhaseBefore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">insertPhaseBefore</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Inserts <a href="insert-phase-before.html#io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/phase">phase</a> before the <a href="insert-phase-before.html#io.ktor.util.pipeline.Pipeline$insertPhaseBefore(io.ktor.util.pipeline.PipelinePhase, io.ktor.util.pipeline.PipelinePhase)/reference">reference</a> phase


</td>
</tr>
<tr>
<td markdown="1">

<a href="intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="index.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds <a href="intercept.html#io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/block">block</a> to the <a href="intercept.html#io.ktor.util.pipeline.Pipeline$intercept(io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)), , kotlin.Unit)))/phase">phase</a> of this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="merge.html">merge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">merge</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.pipeline.Pipeline$merge(io.ktor.util.pipeline.Pipeline((io.ktor.util.pipeline.Pipeline.TSubject, io.ktor.util.pipeline.Pipeline.TContext)))/from">from</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="index.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="index.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Merges another pipeline into this pipeline, maintaining relative phases order


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

<a href="../execute.html">execute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../execute.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">execute</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$execute(io.ktor.util.pipeline.Pipeline((kotlin.Unit, io.ktor.util.pipeline.execute.TContext)), io.ktor.util.pipeline.execute.TContext)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../execute.html#TContext"><span class="identifier">TContext</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Executes this pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/feature.html">feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/feature.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">feature</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$feature(io.ktor.application.feature.A, io.ktor.application.ApplicationFeature((io.ktor.application.feature.A, io.ktor.application.feature.B, io.ktor.application.feature.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/feature.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/feature.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/feature.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.application/feature.html#F"><span class="identifier">F</span></a></code></div>

Gets feature instance for this pipeline, or fails with <a href="../../io.ktor.application/-missing-application-feature-exception/index.html">MissingApplicationFeatureException</a> if the feature is not installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/feature-or-null.html">featureOrNull</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/feature-or-null.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">featureOrNull</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$featureOrNull(io.ktor.application.featureOrNull.A, io.ktor.application.ApplicationFeature((io.ktor.application.featureOrNull.A, io.ktor.application.featureOrNull.B, io.ktor.application.featureOrNull.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/feature-or-null.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/feature-or-null.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/feature-or-null.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.application/feature-or-null.html#F"><span class="identifier">F</span></a><span class="symbol">?</span></code></div>

Returns feature instance for this pipeline, or null if feature is not installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">P</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/install.html#P"><span class="identifier">P</span></a><span class="symbol">.</span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$install(io.ktor.application.install.P, io.ktor.application.ApplicationFeature((io.ktor.application.install.P, io.ktor.application.install.B, io.ktor.application.install.F)), kotlin.Function1((io.ktor.application.install.B, kotlin.Unit)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/install.html#P"><span class="identifier">P</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/install.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/install.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$install(io.ktor.application.install.P, io.ktor.application.ApplicationFeature((io.ktor.application.install.P, io.ktor.application.install.B, io.ktor.application.install.F)), kotlin.Function1((io.ktor.application.install.B, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/install.html#B"><span class="identifier">B</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.application/install.html#F"><span class="identifier">F</span></a></code></div>

Installs <a href="../../io.ktor.application/install.html#io.ktor.application$install(io.ktor.application.install.P, io.ktor.application.ApplicationFeature((io.ktor.application.install.P, io.ktor.application.install.B, io.ktor.application.install.F)), kotlin.Function1((io.ktor.application.install.B, kotlin.Unit)))/feature">feature</a> into this pipeline, if it is not yet installed


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

<a href="../intercept.html">intercept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TSubject</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TContext</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">intercept</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/phase">phase</span><span class="symbol">:</span>&nbsp;<a href="../-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.pipeline$intercept(io.ktor.util.pipeline.Pipeline((kotlin.Any, io.ktor.util.pipeline.intercept.TContext)), io.ktor.util.pipeline.PipelinePhase, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((io.ktor.util.pipeline.intercept.TSubject, io.ktor.util.pipeline.intercept.TContext)), , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="../intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="../intercept.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../intercept.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Intercepts an untyped pipeline when the subject is of the given type


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/uninstall.html">uninstall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/uninstall.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">uninstall</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$uninstall(io.ktor.application.uninstall.A, io.ktor.application.ApplicationFeature((io.ktor.application.uninstall.A, io.ktor.application.uninstall.B, io.ktor.application.uninstall.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/uninstall.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/uninstall.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/uninstall.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Uninstalls <a href="../../io.ktor.application/uninstall.html#io.ktor.application$uninstall(io.ktor.application.uninstall.A, io.ktor.application.ApplicationFeature((io.ktor.application.uninstall.A, io.ktor.application.uninstall.B, io.ktor.application.uninstall.F)))/feature">feature</a> from the pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/uninstall-all-features.html">uninstallAllFeatures</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="../../io.ktor.application/uninstall-all-features.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">uninstallAllFeatures</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Uninstalls all features from the pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/uninstall-feature.html">uninstallFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.application/uninstall-feature.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">uninstallFeature</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$uninstallFeature(io.ktor.application.uninstallFeature.A, io.ktor.util.AttributeKey((io.ktor.application.uninstallFeature.F)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/uninstall-feature.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Uninstalls feature specified by <a href="../../io.ktor.application/uninstall-feature.html#io.ktor.application$uninstallFeature(io.ktor.application.uninstallFeature.A, io.ktor.util.AttributeKey((io.ktor.application.uninstallFeature.F)))/key">key</a> from the pipeline


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/-application-call-pipeline/index.html">ApplicationCallPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ApplicationCallPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Pipeline configuration for executing <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> instances


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/-application-receive-pipeline/index.html">ApplicationReceivePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ApplicationReceivePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.request/-application-receive-request/index.html"><span class="identifier">ApplicationReceiveRequest</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Pipeline for processing incoming content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/-application-send-pipeline/index.html">ApplicationSendPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ApplicationSendPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Server response send pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/-authentication-pipeline/index.html">AuthenticationPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.auth/-authentication-context/index.html"><span class="identifier">AuthenticationContext</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Represents authentication <a href="./index.md">Pipeline</a> for checking and requesting authentication


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-engine-pipeline/index.html">EnginePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">EnginePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Application engine pipeline. One usually don't need to install interceptors here unless your are writing
your own engine implementation


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.response/-http-receive-pipeline/index.html">HttpReceivePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpReceivePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">&gt;</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for receiving <a href="../../io.ktor.client.response/-http-response/index.html">HttpResponse</a> without any processing.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.request/-http-request-pipeline/index.html">HttpRequestPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpRequestPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">&gt;</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for executing <a href="../../io.ktor.client.request/-http-request/index.html">HttpRequest</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.response/-http-response-pipeline/index.html">HttpResponsePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpResponsePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.response/-http-response-container/index.html"><span class="identifier">HttpResponseContainer</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">&gt;</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for executing <a href="../../io.ktor.client.response/-http-response/index.html">HttpResponse</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.request/-http-send-pipeline/index.html">HttpSendPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpSendPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">&gt;</span></code></div>

<a href="../../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for sending <a href="../../io.ktor.client.request/-http-request/index.html">HttpRequest</a> to remote server.


</td>
</tr>
</tbody>
</table>
