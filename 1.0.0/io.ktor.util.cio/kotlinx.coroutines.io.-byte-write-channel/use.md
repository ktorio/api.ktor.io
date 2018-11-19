---
title: use - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="index.html">kotlinx.coroutines.io.ByteWriteChannel</a> / <a href="./use.html">use</a></div>

# use

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">ByteWriteChannel</span><span class="symbol">.</span><span class="identifier">use</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.cio$use(kotlinx.coroutines.io.ByteWriteChannel, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="identifier">ByteWriteChannel</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Executes <a href="use.html#io.ktor.util.cio$use(kotlinx.coroutines.io.ByteWriteChannel, kotlin.SuspendFunction1((kotlinx.coroutines.io.ByteWriteChannel, kotlin.Unit)))/block">block</a> on <a href="#">ByteWriteChannel</a> and close it down correctly whether an exception

