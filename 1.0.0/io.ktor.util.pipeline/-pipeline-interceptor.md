---
title: PipelineInterceptor - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.util.pipeline</a> / <a href="./-pipeline-interceptor.html">PipelineInterceptor</a></div>

# PipelineInterceptor

<div class="signature"><code><span class="keyword">typealias </span><span class="identifier">PipelineInterceptor</span><span class="symbol">&lt;</span><span class="identifier">TSubject</span><span class="symbol">, </span><span class="identifier">TContext</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;<span class="keyword">suspend </span><a href="-pipeline-context/index.html"><span class="identifier">PipelineContext</span></a><span class="symbol">&lt;</span><a href="-pipeline-interceptor.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">,</span>&nbsp;<a href="-pipeline-interceptor.html#TContext"><span class="identifier">TContext</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="-pipeline-interceptor.html#TSubject"><span class="identifier">TSubject</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Represents an interceptor type which is a suspend extension function for context

