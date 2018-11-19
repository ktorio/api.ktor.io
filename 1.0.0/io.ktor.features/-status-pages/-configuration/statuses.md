---
title: StatusPages.Configuration.statuses - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">StatusPages</a> / <a href="index.html">Configuration</a> / <a href="./statuses.html">statuses</a></div>

# statuses

<div class="signature"><code><span class="keyword">val </span><span class="identifier">statuses</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">,</span>&nbsp;<span class="keyword">suspend </span><a href="../../../io.ktor.util.pipeline/-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">,</span>&nbsp;<a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Status handlers by status code

