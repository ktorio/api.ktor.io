---
title: BaseApplicationEngine.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="index.html">BaseApplicationEngine</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">BaseApplicationEngine</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationEngine$<init>(io.ktor.server.engine.ApplicationEngineEnvironment, io.ktor.server.engine.EnginePipeline)/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationEngine$<init>(io.ktor.server.engine.ApplicationEngineEnvironment, io.ktor.server.engine.EnginePipeline)/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../-engine-pipeline/index.html"><span class="identifier">EnginePipeline</span></a>&nbsp;<span class="symbol">=</span>&nbsp;defaultEnginePipeline(environment)<span class="symbol">)</span></code></div>

Base class for implementing <a href="../-application-engine/index.html">ApplicationEngine</a>

It creates default engine pipeline, provides <a href="application.html">application</a> property and installs default transformations
on respond and receive

### Parameters

<code>environment</code> - instance of <a href="../-application-engine-environment/index.html">ApplicationEngineEnvironment</a> for this engine

<code>pipeline</code> - pipeline to use with this engine