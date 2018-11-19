---
title: SessionTrackerByValue.load - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="index.html">SessionTrackerByValue</a> / <a href="./load.html">load</a></div>

# load

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">load</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTrackerByValue$load(io.ktor.application.ApplicationCall, kotlin.String)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions.SessionTrackerByValue$load(io.ktor.application.ApplicationCall, kotlin.String)/transport">transport</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Overrides <a href="../-session-tracker/load.html">SessionTracker.load</a>

Load session value from <a href="load.html#io.ktor.sessions.SessionTrackerByValue$load(io.ktor.application.ApplicationCall, kotlin.String)/transport">transport</a> string for the specified <a href="load.html#io.ktor.sessions.SessionTrackerByValue$load(io.ktor.application.ApplicationCall, kotlin.String)/call">call</a>

It is recommended to perform lookup asynchronously if there is an external session store

**Return**
session instance or null if session was not found

