---
title: PipelineExecutor.execute - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.pipeline</a> / <a href="index.html">PipelineExecutor</a> / <a href="./execute.html">execute</a></div>

# execute

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">execute</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.pipeline.PipelineExecutor$execute(io.ktor.util.pipeline.PipelineExecutor.R)/initial">initial</span><span class="symbol">:</span>&nbsp;<a href="index.html#R"><span class="identifier">R</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#R"><span class="identifier">R</span></a></code></div>

Start pipeline execution or fail if already running and not yet completed.
It should not be invoked concurrently.

