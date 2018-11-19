---
title: WeakTimeoutQueue.register - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.internals</a> / <a href="index.html">WeakTimeoutQueue</a> / <a href="./register.html">register</a></div>

# register

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">register</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$register(kotlinx.coroutines.Job)/job">job</span><span class="symbol">:</span>&nbsp;<span class="identifier">Job</span><span class="symbol">)</span><span class="symbol">: </span><a href="-registration/index.html"><span class="identifier">Registration</span></a></code></div>

Register <a href="register.html#io.ktor.http.cio.internals.WeakTimeoutQueue$register(kotlinx.coroutines.Job)/job">job</a> in this queue. It will be cancelled if doesn't complete in time.

