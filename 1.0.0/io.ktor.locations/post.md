---
title: post - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.locations</a> / <a href="./post.html">post</a></div>

# post

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="keyword">reified</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">post</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">noinline</span> <span class="parameterName" id="io.ktor.locations$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.post.T, )))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="post.html#T"><span class="identifier">T</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.routing/-route/index.html"><span class="identifier">Route</span></a></code></div>

Registers a typed handler <a href="post.html#io.ktor.locations$post(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), io.ktor.locations.post.T, )))/body">body</a> for a <code>POST</code> location defined by class <a href="post.html#T">T</a>.

Class <a href="post.html#T">T</a> **must** be annotated with <a href="-location/index.html">Location</a>.

### Parameters

<code>body</code> - receives an instance of typed location <a href="post.html#T">T</a> as first parameter.