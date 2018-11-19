---
title: ApplicationEnvironment - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.application</a> / <a href="./index.html">ApplicationEnvironment</a></div>

# ApplicationEnvironment

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEnvironment</span></code></div>

Represents an environment in which <a href="../-application/index.html">Application</a> runs

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="class-loader.html">classLoader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">classLoader</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a></code></div>

<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html">ClassLoader</a> used to load application.


</td>
</tr>
<tr>
<td markdown="1">

<a href="config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">config</span><span class="symbol">: </span><a href="../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Configuration for the <a href="../-application/index.html">Application</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="log.html">log</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">log</span><span class="symbol">: </span><span class="identifier">Logger</span></code></div>

Instance of <a href="#">Logger</a> to be used for logging.


</td>
</tr>
<tr>
<td markdown="1">

<a href="monitor.html">monitor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">monitor</span><span class="symbol">: </span><a href="../-application-events/index.html"><span class="identifier">ApplicationEvents</span></a></code></div>

Provides events on Application lifecycle


</td>
</tr>
<tr>
<td markdown="1">

<a href="parent-coroutine-context.html">parentCoroutineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">parentCoroutineContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

Parent coroutine context for an application


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-application-engine-environment/index.html">ApplicationEngineEnvironment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEngineEnvironment</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationEnvironment</span></a></code></div>

Represents an environment in which engine runs


</td>
</tr>
</tbody>
</table>
