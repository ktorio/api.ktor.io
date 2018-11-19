---
title: ApplicationEngineFactory - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">ApplicationEngineFactory</a></div>

# ApplicationEngineFactory

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEngineFactory</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

Factory interface for creating <a href="../-application-engine/index.html">ApplicationEngine</a> instances

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create.html">create</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="index.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#TEngine"><span class="identifier">TEngine</span></a></code></div>

Creates an engine from the given <a href="create.html#io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/environment">environment</a> and <a href="create.html#io.ktor.server.engine.ApplicationEngineFactory$create(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.ApplicationEngineFactory.TConfiguration, kotlin.Unit)))/configure">configure</a> script


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.cio/-c-i-o/index.html">CIO</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">CIO</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.cio/-c-i-o-application-engine/index.html"><span class="identifier">CIOApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.cio/-c-i-o-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="./index.md">ApplicationEngineFactory</a> providing a CIO-based <a href="../-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.jetty/-jetty/index.html">Jetty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Jetty</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.jetty/-jetty-application-engine/index.html"><span class="identifier">JettyApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.jetty/-jetty-application-engine-base/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="./index.md">ApplicationEngineFactory</a> providing a Jetty-based <a href="../-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.netty/-netty/index.html">Netty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Netty</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.netty/-netty-application-engine/index.html"><span class="identifier">NettyApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.netty/-netty-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="./index.md">ApplicationEngineFactory</a> providing a Netty-based <a href="../-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.testing/-test-engine/index.html">TestEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">TestEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.testing/-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.testing/-test-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="./index.md">ApplicationEngineFactory</a> providing a CIO-based <a href="../-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.tomcat/-tomcat/index.html">Tomcat</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Tomcat</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.tomcat/-tomcat-application-engine/index.html"><span class="identifier">TomcatApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.tomcat/-tomcat-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="./index.md">ApplicationEngineFactory</a> providing a Tomcat-based <a href="../-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>
