---
title: ApplicationSendPipeline.Render - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.response</a> / <a href="index.html">ApplicationSendPipeline</a> / <a href="./-render.html">Render</a></div>

# Render

<div class="signature"><code><span class="keyword">val </span><span class="identifier">Render</span><span class="symbol">: </span><a href="../../io.ktor.util.pipeline/-pipeline-phase/index.html"><span class="identifier">PipelinePhase</span></a></code></div>

Phase to render any current pipeline subject into <a href="../../io.ktor.http.content/-outgoing-content/index.html">io.ktor.http.content.OutgoingContent</a>

Beyond this phase only <a href="../../io.ktor.http.content/-outgoing-content/index.html">io.ktor.http.content.OutgoingContent</a> should be produced by any interceptor

