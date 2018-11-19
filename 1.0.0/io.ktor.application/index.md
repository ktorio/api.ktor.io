---
title: io.ktor.application - 
layout: api
---



## Package io.ktor.application

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application/index.html">Application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Application</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><span class="identifier">CoroutineScope</span></code></div>

Represents configured and running web application, capable of handling requests.
It is also the application coroutine scope that is cancelled immediately at application stop so useful
for launching background coroutines.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-call/index.html">ApplicationCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationCall</span></code></div>

Represents a single act of communication between client and server.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-call-pipeline/index.html">ApplicationCallPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ApplicationCallPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Pipeline configuration for executing <a href="-application-call/index.html">ApplicationCall</a> instances


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-environment/index.html">ApplicationEnvironment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEnvironment</span></code></div>

Represents an environment in which <a href="-application/index.html">Application</a> runs


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-events/index.html">ApplicationEvents</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationEvents</span></code></div>

Provides events for <a href="-application/index.html">Application</a> lifecycle


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-feature/index.html">ApplicationFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationFeature</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">TPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="keyword">out</span>&nbsp;<span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Defines an installable Application Feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="-event-definition/index.html">EventDefinition</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">EventDefinition</span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span></code></div>

Definition of an event


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-duplicate-application-feature-exception/index.html">DuplicateApplicationFeatureException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DuplicateApplicationFeatureException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Thrown when Application Feature has been attempted to be installed with the same key as already installed Feature


</td>
</tr>
<tr>
<td markdown="1">

<a href="-missing-application-feature-exception/index.html">MissingApplicationFeatureException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MissingApplicationFeatureException</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Thrown when Application Feature has been attempted to be accessed but has not been installed before


</td>
</tr>
</tbody>
</table>

### Type Aliases

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-event-handler.html">EventHandler</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><span class="identifier">EventHandler</span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;<span class="symbol">(</span><a href="-event-handler.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Specifies signature for the event handler


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application-started.html">ApplicationStarted</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ApplicationStarted</span><span class="symbol">: </span><a href="-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="-application/index.html"><span class="identifier">Application</span></a><span class="symbol">&gt;</span></code></div>

Event definition for Application Started event


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-starting.html">ApplicationStarting</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ApplicationStarting</span><span class="symbol">: </span><a href="-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="-application/index.html"><span class="identifier">Application</span></a><span class="symbol">&gt;</span></code></div>

Event definition for Application Starting event


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-stop-preparing.html">ApplicationStopPreparing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ApplicationStopPreparing</span><span class="symbol">: </span><a href="-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="-application-environment/index.html"><span class="identifier">ApplicationEnvironment</span></a><span class="symbol">&gt;</span></code></div>

Event definition for an event that is fired when the application is going to stop


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-stopped.html">ApplicationStopped</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ApplicationStopped</span><span class="symbol">: </span><a href="-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="-application/index.html"><span class="identifier">Application</span></a><span class="symbol">&gt;</span></code></div>

Event definition for Application Stopped event


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-stopping.html">ApplicationStopping</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ApplicationStopping</span><span class="symbol">: </span><a href="-event-definition/index.html"><span class="identifier">EventDefinition</span></a><span class="symbol">&lt;</span><a href="-application/index.html"><span class="identifier">Application</span></a><span class="symbol">&gt;</span></code></div>

Event definition for Application Stopping event


</td>
</tr>
<tr>
<td markdown="1">

<a href="application.html">application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">application</span><span class="symbol">: </span><a href="-application/index.html"><span class="identifier">Application</span></a></code></div>

Current application for the context


</td>
</tr>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">: </span><a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

Current call for the context


</td>
</tr>
<tr>
<td markdown="1">

<a href="log.html">log</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="identifier">log</span><span class="symbol">: </span><span class="identifier">Logger</span></code></div>

Convenience property to access log from application


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="feature.html">feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="feature.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">feature</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$feature(io.ktor.application.feature.A, io.ktor.application.ApplicationFeature((io.ktor.application.feature.A, io.ktor.application.feature.B, io.ktor.application.feature.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="feature.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="feature.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="feature.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="feature.html#F"><span class="identifier">F</span></a></code></div>

Gets feature instance for this pipeline, or fails with <a href="-missing-application-feature-exception/index.html">MissingApplicationFeatureException</a> if the feature is not installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="feature-or-null.html">featureOrNull</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="feature-or-null.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">featureOrNull</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$featureOrNull(io.ktor.application.featureOrNull.A, io.ktor.application.ApplicationFeature((io.ktor.application.featureOrNull.A, io.ktor.application.featureOrNull.B, io.ktor.application.featureOrNull.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="feature-or-null.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="feature-or-null.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="feature-or-null.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="feature-or-null.html#F"><span class="identifier">F</span></a><span class="symbol">?</span></code></div>

Returns feature instance for this pipeline, or null if feature is not installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">P</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="install.html#P"><span class="identifier">P</span></a><span class="symbol">.</span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$install(io.ktor.application.install.P, io.ktor.application.ApplicationFeature((io.ktor.application.install.P, io.ktor.application.install.B, io.ktor.application.install.F)), kotlin.Function1((io.ktor.application.install.B, kotlin.Unit)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="install.html#P"><span class="identifier">P</span></a><span class="symbol">,</span>&nbsp;<a href="install.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="install.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$install(io.ktor.application.install.P, io.ktor.application.ApplicationFeature((io.ktor.application.install.P, io.ktor.application.install.B, io.ktor.application.install.F)), kotlin.Function1((io.ktor.application.install.B, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="install.html#B"><span class="identifier">B</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="install.html#F"><span class="identifier">F</span></a></code></div>

Installs <a href="install.html#io.ktor.application$install(io.ktor.application.install.P, io.ktor.application.ApplicationFeature((io.ktor.application.install.P, io.ktor.application.install.B, io.ktor.application.install.F)), kotlin.Function1((io.ktor.application.install.B, kotlin.Unit)))/feature">feature</a> into this pipeline, if it is not yet installed


</td>
</tr>
<tr>
<td markdown="1">

<a href="uninstall.html">uninstall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="uninstall.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">uninstall</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$uninstall(io.ktor.application.uninstall.A, io.ktor.application.ApplicationFeature((io.ktor.application.uninstall.A, io.ktor.application.uninstall.B, io.ktor.application.uninstall.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="uninstall.html#A"><span class="identifier">A</span></a><span class="symbol">,</span>&nbsp;<a href="uninstall.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="uninstall.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Uninstalls <a href="uninstall.html#io.ktor.application$uninstall(io.ktor.application.uninstall.A, io.ktor.application.ApplicationFeature((io.ktor.application.uninstall.A, io.ktor.application.uninstall.B, io.ktor.application.uninstall.F)))/feature">feature</a> from the pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="uninstall-all-features.html">uninstallAllFeatures</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="uninstall-all-features.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">uninstallAllFeatures</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Uninstalls all features from the pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="uninstall-feature.html">uninstallFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">A</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="uninstall-feature.html#A"><span class="identifier">A</span></a><span class="symbol">.</span><span class="identifier">uninstallFeature</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.application$uninstallFeature(io.ktor.application.uninstallFeature.A, io.ktor.util.AttributeKey((io.ktor.application.uninstallFeature.F)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="uninstall-feature.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Uninstalls feature specified by <a href="uninstall-feature.html#io.ktor.application$uninstallFeature(io.ktor.application.uninstallFeature.A, io.ktor.util.AttributeKey((io.ktor.application.uninstallFeature.F)))/key">key</a> from the pipeline


</td>
</tr>
</tbody>
</table>
