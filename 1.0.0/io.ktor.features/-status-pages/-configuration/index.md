---
title: StatusPages.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">StatusPages</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Status pages feature config

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Status pages feature config


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="exceptions.html">exceptions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">exceptions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/Class.html"><span class="identifier">Class</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">,</span>&nbsp;<span class="keyword">suspend </span><a href="../../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Exception handlers map by exception class


</td>
</tr>
<tr>
<td markdown="1">

<a href="statuses.html">statuses</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">statuses</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">,</span>&nbsp;<span class="keyword">suspend </span><a href="../../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Status handlers by status code


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="exception.html">exception</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">&gt;</span> <span class="identifier">exception</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.StatusPages.Configuration$exception(kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.features.StatusPages.Configuration.exception.T, )))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="exception.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register exception <a href="exception.html#io.ktor.features.StatusPages.Configuration$exception(kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.features.StatusPages.Configuration.exception.T, )))/handler">handler</a> for exception type <a href="exception.html#T">T</a> and it's children

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">&gt;</span> <span class="identifier">exception</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.StatusPages.Configuration$exception(java.lang.Class((io.ktor.features.StatusPages.Configuration.exception.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.features.StatusPages.Configuration.exception.T, )))/klass">klass</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/Class.html"><span class="identifier">Class</span></a><span class="symbol">&lt;</span><a href="exception.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.StatusPages.Configuration$exception(java.lang.Class((io.ktor.features.StatusPages.Configuration.exception.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.features.StatusPages.Configuration.exception.T, )))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="exception.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register exception <a href="exception.html#io.ktor.features.StatusPages.Configuration$exception(java.lang.Class((io.ktor.features.StatusPages.Configuration.exception.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.features.StatusPages.Configuration.exception.T, )))/handler">handler</a> for exception class <a href="exception.html#io.ktor.features.StatusPages.Configuration$exception(java.lang.Class((io.ktor.features.StatusPages.Configuration.exception.T)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.features.StatusPages.Configuration.exception.T, )))/klass">klass</a> and it's children


</td>
</tr>
<tr>
<td markdown="1">

<a href="status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">status</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.features.StatusPages.Configuration$status(kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.HttpStatusCode, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.StatusPages.Configuration$status(kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.HttpStatusCode, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register status <a href="status.html#io.ktor.features.StatusPages.Configuration$status(kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.HttpStatusCode, kotlin.Unit)))/handler">handler</a> for <a href="status.html#io.ktor.features.StatusPages.Configuration$status(kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Any, io.ktor.application.ApplicationCall)), io.ktor.http.HttpStatusCode, kotlin.Unit)))/status">status</a> code


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../status-file.html">statusFile</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">statusFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/code">code</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/filePattern">filePattern</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a status page file(s) using <a href="../../status-file.html#io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/filePattern">filePattern</a> for multiple status <a href="../../status-file.html#io.ktor.features$statusFile(io.ktor.features.StatusPages.Configuration, kotlin.Array((io.ktor.http.HttpStatusCode)), kotlin.String)/code">code</a> list


</td>
</tr>
</tbody>
</table>
